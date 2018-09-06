var mongoose=require("mongoose");

var teamMemberSchema=new mongoose.Schema({
    name: String,
    designation: String,
    image: String
})
module.exports={
    teamMemberSchema,
    mongoose
}