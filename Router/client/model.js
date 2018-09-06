var mongoose = require('mongoose');
var { clientSchema } = require('./schema');
var {database}=require('../../configDatabase/index')
var clientModel = mongoose.model('client', clientSchema);

module.exports = {
    clientModel
};