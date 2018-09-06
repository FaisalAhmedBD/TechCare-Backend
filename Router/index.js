const express = require('express');
var router_v1 = express.Router();
var { getClientInfo } = require('./client/clientController');

router_v1.get('/clients', getClientInfo);

module.exports = {
    router_v1
}