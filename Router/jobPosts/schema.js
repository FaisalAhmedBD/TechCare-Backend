var mongoose=require("mongoose");
var schema=mongoose.schema;

var jobPostSchema=new schema({
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