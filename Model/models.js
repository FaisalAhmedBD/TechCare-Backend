var mongoose = require('mongoose');
var { clientSchema, teamMemberSchema, careerSchema, productSchema } = require('../Schema/schemas');
mongoose.connect('mongodb://localhost:27017/techcare-website');
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connection Succeeded.");
});
var client = mongoose.model('client', clientSchema);
var teamMember = mongoose.model('team-member', teamMemberSchema);
var career = mongoose.model('career', careerSchema);
var product = mongoose.model('product', productSchema);
module.exports = {
    client,
    teamMember,
    career,
    product
};