const express = require('express');
var router_v1 = express.Router();
var { getClientInfo, addNewClient } = require('./client/clientController');
var { getJobPosts, addJobPost } = require('./jobPosts/controller');
var {getProductInfo, addNewProduct} = require('./product/controller');

router_v1.get('/clients', getClientInfo);
router_v1.get('/job-posts', getJobPosts);
router_v1.get('/products', getProductInfo);

router_v1.post('/add-client', addNewClient);
router_v1.post('/add-job-post', addJobPost);
router_v1.post('/add-new-product', addNewProduct );

module.exports = {
    router_v1
}