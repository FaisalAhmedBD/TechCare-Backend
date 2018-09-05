var Models = require('../Model/clientModel');

var nwClient = new Models.client({
    name: 'Onnorokom Group',
    product_name: 'KhoshGolpo',
    type: 'Ecommerce',
    location: 'Motijheel, Dhaka',
    feedback: 'Awesome product',
    client_logo: 'client_logo_url',
    product_logo: 'product_logo_url',
});
module.exports.addClient = nwClient;
