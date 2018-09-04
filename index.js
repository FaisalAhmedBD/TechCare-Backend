var Models = require('./Model/models')
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

var clientList;
Models.client.find({}, (err, data) => {
    if (err)
        console.log('error')
    else {
        clientList=data;
        console.log(data)
    }
});

app.get('/', (req, res) => {
    res.send(clientList)
})
app.listen(8000, () => console.log('TechCare is listening on port 8000!'))