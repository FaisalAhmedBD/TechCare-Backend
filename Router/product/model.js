var mongoose = require("mongoose");
var { database } = require('../../configDatabase/index');
var { productSchema } = require('./schema');
var productModel = mongoose.model('jobpost', productSchema);

module.exports = {
    productModel
}
