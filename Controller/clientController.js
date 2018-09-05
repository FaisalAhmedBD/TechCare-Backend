const express = require('express');
const app = express();
var Models = require('../Model/models');
var { addClient } = require('../Middleware/addClient');

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
module.exports = {
    getClientInfo,
    addClient
}