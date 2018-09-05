const express = require('express');
const app = express();
var Models = require('../Model/models');
var { addClient } = require('./addClient');

let clientMiddleWare = (req, res) => {
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
    clientMiddleWare: clientMiddleWare,
    addClient: addClient
}