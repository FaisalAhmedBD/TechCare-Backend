var mongoose = require("mongoose");
var { database } = require('../../configDatabase/index');
var { jobPostSchema } = require('./schema');
var jobPostModel = mongoose.model('jobpost', jobPostSchema);

module.exports = {
    jobPostModel
}
