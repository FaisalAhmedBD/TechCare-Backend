var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/techcare-website');
var database = mongoose.connection;

database.on("error", console.error.bind(console, "Connection error:"));
database.once("open", () => {
    console.log("Connection Succeeded.");
});
module.exports = {
    database
}