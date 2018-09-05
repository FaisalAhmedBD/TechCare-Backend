var mongoose = require('mongoose');
var { clientSchema, teamMember } = require('../Schema/schemas');
mongoose.connect('mongodb://localhost:27017/techcare-website');
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connection Succeeded.");
});
var client = mongoose.model('client', clientSchema);
var teamMember = mongoose.model('team-member', teamMember);
module.exports = {
    client,
    teamMember
};