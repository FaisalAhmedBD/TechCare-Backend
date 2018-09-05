var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    name: String,
    product_name: String,
    type: String,
    location: String,
    feedback: String,
    client_logo: String,
    product_logo: String,
});
var teamMember = new Schema({
    name: String,
    designation: String,
    image: String
});
var career = new Schema({
    designation: String,
    number_of_vacancies: String,
    experience: String,
    salary: String,
    intro_text: String,
    Mission: String,
    requirements: String,
    valuable_experience: String
});
var products = new Schema({
    product_name: String,
    product_logo: String,
    client_name: String,
    flag: String,
    type_of_work: String,
    industry: String,
    discover: String,
    define: String,
    design_Development: String,
    images: String,
});
module.exports = {
    clientSchema,
    teamMember,
    career,
    products
};