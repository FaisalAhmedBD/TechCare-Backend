var { client } = require('../Model/models');

let getClientInfo = (req, res) => {
    client.find({}, (err, data) => {
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

    const newClient = new client({
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