var mongoose = require("mongoose");
var { jobPostSchema } = require('./schema');
var jobPostModel = mongoose.model('jobpost', jobPostSchema);

module.exports = {
    jobPostModel
}
