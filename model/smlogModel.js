var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var smlogModel = new Schema({
Event: {type: String},
RealmOid: {type: String},
SessionId: {type: String},
Time: {type: Date}
});

module.exports = mongoose.model('SMLog', smlogModel);