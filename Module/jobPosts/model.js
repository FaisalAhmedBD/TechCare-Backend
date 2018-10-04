var { jobPostSchema, mongoose } = require('./schema');
var jobPostModel = mongoose.model('jobpost', jobPostSchema);

module.exports = {
    jobPostModel
}
