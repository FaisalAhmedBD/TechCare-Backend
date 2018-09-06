var mongoose = require('mongoose');
var { clientSchema } = require('./schema');
var {database}=require('../../configDatabase/index')
var client = mongoose.model('client', clientSchema);

module.exports = {
    client
};