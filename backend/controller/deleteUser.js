const User = require("../models/user");

module.exports.deleteUser = async(req,res) => {
    const { _id } = req.body;
     try{
       await User.findByIdAndDelete(_id)
       return res.send("Deleted Successfully")
       
     }
     catch(err){
       return res.send({err: err})
     }
}