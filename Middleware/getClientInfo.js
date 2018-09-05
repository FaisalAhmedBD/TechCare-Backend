var Models = require('../Model/models');

var clientInfo = Models.client.find({}, (err, data) => {
    if (err) {
        console.log('error : ', err);
        res.send('No data found')
    }
    else {
        res.send({
            'clients': data,
            'number_of_clients': data.length,
        })
    }
});
module.exports.getClientInfo=clientInfo;