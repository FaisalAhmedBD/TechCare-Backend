var { clientSchema, mongoose } = require('./schema');
var clientModel = mongoose.model('client', clientSchema);

module.exports = {
    clientModel
};