var Models = require('./Model/models')
const express = require('express');
const app = express();
app.use(express.static('public'));

var nwClient = new Models.client({
    name: 'Rokomari.com',
    product_name: 'Rokomari Android App',
    type: 'Ecommerce',
    location: 'Bangladesh',
    feedback: 'Awesome product',
    client_logo: 'client logo test!',
    product_logo: 'product logo test',
});
nwClient.save(error => {
    if (error)
        console.error(error)
    console.log('new client added');
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(8000, () => console.log('TechCare is listening on port 8000!'))