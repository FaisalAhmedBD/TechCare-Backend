const express = require('express');
var router_v1 = express.Router();
var { getClientInfo,addNewClient } = require('./client/clientController');

router_v1.get('/clients', getClientInfo);
router_v1.post('/add-client', addNewClient);

module.exports = {
    router_v1
}