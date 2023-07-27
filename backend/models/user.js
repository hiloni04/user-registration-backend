const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
emailId:{
    type: String,
    required: true
},
username:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true,
},
contactNo: {
    type: Number,
},
profileImage:{
    type: String
}
})

module.exports = mongoose.model("Users", UserSchema);