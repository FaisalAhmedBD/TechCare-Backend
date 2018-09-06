var { career } = require('../Model/models');

let getJobPosts = (req, res) => {
    career.find({}, (err, data) => {
        if (err) {
            console.log('error loading job posts, error : ', err);
            res.send('error while loading job posts');
        }
        else {
            res.send({
                job_posts: data
            })
        }
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

    const newJobPost = new career({
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
        if (error)
            console.error(error)
        res.send('new job post added ');
    })
}
module.exports = {
    getJobPosts,
    addJobPost
}