const express = require('express');
var router = express.Router();
var { getClientInfo, addNewClient } = require('../Module/client');
var { getJobPosts, addJobPost } = require('../Module/jobPosts');
var { getProductInfo, addNewProduct } = require('../Module/product');
var { getTeamMemberInfo, addNewTeamMember } = require('../Module/teamMember');

router.get('/clients', getClientInfo);
router.get('/job-posts', getJobPosts);
router.get('/products', getProductInfo);
router.get('/team-members', getTeamMemberInfo);

router.post('/add-client', addNewClient);
router.post('/add-job-post', addJobPost);
router.post('/add-new-product', addNewProduct);
router.post('/add-team-member', addNewTeamMember);

module.exports = {
    router
}