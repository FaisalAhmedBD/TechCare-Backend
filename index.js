var Models = require('./models')
const express = require('express');
const app = express();
app.use(express.static('public'));

var nwClient = new Models.client({ name: 'Onnorokom Group' });
nwClient.save(error => {
    if (error)
        console.error(error)
    console.log('new client added');
})
