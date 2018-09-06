const express = require('express');
var router_v1 = express.Router();
var { getClientInfo, addNewClient } = require('./client/clientController');
var { getJobPosts, addJobPost } = require('./jobPosts/controller');

router_v1.get('/clients', getClientInfo);
router_v1.get('/job-posts', getJobPosts);

router_v1.post('/add-client', addNewClient);
router_v1.post('/add-job-post', addJobPost);

module.exports = {
    router_v1
}