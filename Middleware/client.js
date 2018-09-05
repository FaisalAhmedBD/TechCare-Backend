const express = require('express');
const app = express();
var Models = require('../Model/models');

// var nwClient = new Models.client({
//     name: 'Rokomari.com',
//     product_name: 'Rokomari Android App',
//     type: 'Ecommerce',
//     location: 'Bangladesh',
//     feedback: 'Awesome product',
//     client_logo: 'client_logo_url',
//     product_logo: 'product_logo_url',
// });
// let addClient=nwClient.save(error => {
//     if (error)
//         console.error(error)
//     console.log('new client added');
// })

var clientList;
Models.client.find({}, (err, data) => {
    if (err)
        console.log('error')
    else {
        clientList = data;
        console.log(data)
    }
});

let clientMiddleWare = (req, res) => {
    res.send({
        'clients': clientList,
        'number_of_clients': clientList.length,
    })
}
module.exports=
{
    clientMiddleWare:clientMiddleWare,
   // addClient:addClient
}