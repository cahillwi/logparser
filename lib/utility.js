var compareDates = function(dt1, dt2){
    var date1 = parseDate(dt1);
    var date2 = parseDate(dt2);
    var bool = false;
    var seconds = parseInt((date2-date1)/1000);
    //if time between date is less than 5 minutes
    if(seconds < 300) {
      bool = true;
    }
    return bool;
  }
  
  
function parseDate(s) {
var months = {jan: '01',feb: '02',mar: '03',apr: '04',may: '05',jun: '06',
                jul: '07',aug: '08',sep: '09',oct: '10',nov: '11',dec: '12'};
s = s.replace(/\s/g, '');
var date = s.split('/');
var newFormat = date[2].slice(0, 4) + '-' + months[date[1].toLowerCase()] + '-' + date[0] + 'T' + date[2].substring(5);
//format needs to be 2017-08-23T04:00:00-05:00
return new Date(newFormat);
}
//module.exports = parseDate;
module.exports.compareDates = compareDates;