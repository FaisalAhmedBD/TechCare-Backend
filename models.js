var mongoose = require('mongoose');
var ClientSchema = require('./Models/client');
mongoose.connect('mongodb://localhost:27017/techcare-website');
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", (callback) => {
    console.log("Connection Succeeded.");
});
var client = mongoose.model('client', ClientSchema.clientSchema);
module.exports.client = client;