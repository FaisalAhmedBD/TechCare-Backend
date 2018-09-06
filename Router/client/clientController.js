var { client } = require('../../Model/models');

let getClientInfo = (req, res) => {
    return client
        .find({})
        .then(data => {
            res.send({
                clients: data
            })
        })
        .catch(error => {
            console.log('error while loading client info');
            res.send('error while loading client info');
        })
}
module.exports = {
    getClientInfo
}