var { jobPostModel } = require('./model');

let getJobPosts = (req, res) => {
    return jobPostModel
        .find({})
        .then(data => {
            res.send({
                jobPosts: data
            })
        })
        .catch(error => {
            console.error(error);
            res.send('error while loading job posts, error : ', error);
        })
}
let addJobPost = (req, res) => {
    const {
        designation,
        number_of_vacancies,
        experience,
        salary,
        intro_text,
        mission,
        requirements,
        valuable_experience
    } = req.body;

    const newJobPost = new jobPostModel({
        designation,
        number_of_vacancies,
        experience,
        salary,
        intro_text,
        mission,
        requirements,
        valuable_experience
    });

    newJobPost.save(error => {
        if (error) {
            console.error(error);
            res.send('error while saving job post in database');
        }
        res.send('new job post successfully added')
    })

}
module.exports = {
    getJobPosts,
    addJobPost
}