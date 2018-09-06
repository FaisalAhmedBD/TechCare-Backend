var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobPostSchema=new Schema({
    designation: String,
    number_of_vacancies: String,
    experience: String,
    salary: String,
    intro_text: String,
    mission: String,
    requirements: String,
    valuable_experience: String
})
module.exports={
    jobPostSchema
}