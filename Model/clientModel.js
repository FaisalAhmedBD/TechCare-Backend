var mongoose = require('mongoose');
var ClientSchema = require('../Schemas/client');
mongoose.connect('mongodb://localhost:27017/techcare-website');
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connection Succeeded.");
});
var client = mongoose.model('client', ClientSchema.clientSchema);
module.exports.client = client;