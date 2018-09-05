var Models = require('./Model/models')
var clientMiddleWare=require('./Middleware/client');
const express = require('express');
const app = express();
app.use(express.static('public'));

// var nwClient = new Models.client({
//     name: 'Rokomari.com',
//     product_name: 'Rokomari Android App',
//     type: 'Ecommerce',
//     location: 'Bangladesh',
//     feedback: 'Awesome product',
//     client_logo: 'client_logo_url',
//     product_logo: 'product_logo_url',
// });
// nwClient.save(error => {
//     if (error)
//         console.error(error)
//     console.log('new client added');
// })


app.get('/', clientMiddleWare.clientMiddleWare)
app.listen(8000, () => console.log('TechCare is listening on port 8000!'))
