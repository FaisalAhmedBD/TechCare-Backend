var mongoose=require("mongoose");

var productSchema=new mongoose.Schema({
    product_name: String,
    product_logo: String,
    client_name: String,
    flag: String,
    type_of_work: String,
    industry: String,
    discover: String,
    define: String,
    design_Development: String,
    images: String
})
module.exports={
    productSchema
}