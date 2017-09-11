var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var csv = require("csvtojson");
var replaceStream = require('replacestream');
var util = require('./lib/utility');

var instream = fs.createReadStream('./smaccess_20170823_235857.log').pipe(replaceStream('[', ''));
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var validated = [];
csv({delimiter: "]"})
.fromStream(instream)
.on("json",function(jsonObj){ //single json object will be emitted for each csv line
  if(jsonObj.Event == 'ValidateAccept'){
    validated.push(jsonObj);
   //console.log(jsonObj);
  }
})
.on('done', function(error){
  console.log(validated.length);
  validated.some(function(obj, index){
    var test = index;
    validated.some(function(obj2, index2){
      var test2 = index;
      if(obj.SessionId === obj2.SessionId && index != index2 && util.compareDates(obj.Time, obj2.Time)){
        console.log('Duplicate: ' + obj.UserName + obj2.UserName)
        validated.splice(index2, 1);
      }
    })
  })
  console.log(validated.length);
})


rl.on('line', function(line) {
  // process line here
  //line = line.replace(/\[/gi, '');

  //console.log(line);
});

rl.on('close', function() {
  // do something on finish here
});