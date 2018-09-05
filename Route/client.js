const express = require('express');
const app = express();
var { getClientData, addClient } = require('../Controller/clientController');
app.get('/', getClientData);