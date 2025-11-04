const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    googleId: { type: String, unique: true, sparse: true }, // ✅ sparse allows null
    githubId: { type: String, unique: true, sparse: true }, // ✅ sparse allows null
    name: String,
    email :{type:String, unique:true,sparse: true},
    picture: String,

},{timestamps:true})


module.exports = mongoose.model('User',userSchema)