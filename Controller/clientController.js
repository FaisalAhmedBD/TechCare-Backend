const express = require('express');
const app = express();
var Models = require('../Model/clientModel');
var { addClient } = require('../Middlewares/addClient');

let getClientInfo = (req, res) => {
    Models.client.find({}, (err, data) => {
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
    addClient.save(error => {
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