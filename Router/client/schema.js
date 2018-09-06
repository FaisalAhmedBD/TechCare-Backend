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
module.exports = {
    clientSchema
};