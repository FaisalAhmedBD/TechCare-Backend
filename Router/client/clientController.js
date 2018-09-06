var { clientModel } = require('./model');

let getClientInfo = (req, res) => {
    return clientModel
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
let addNewClient = (req, res) => {
    const {
        name,
        product_name,
        type,
        location,
        feedback,
        client_logo,
        product_logo,
    } = req.body

    const newClient = new clientModel({
        name,
        product_name,
        type,
        location,
        feedback,
        client_logo,
        product_logo,
    })
    newClient.save(error => {
        if (error)
            console.error(error)
        console.log('new client added!');
    })
    res.send('client added')
}
module.exports = {
    getClientInfo,
    addNewClient
}