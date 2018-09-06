var mongoose = require('mongoose');
var { clientSchema } = require('./schema');
var clientModel = mongoose.model('client', clientSchema);

module.exports = {
    clientModel
};