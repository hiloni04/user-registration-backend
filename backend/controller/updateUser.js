const User = require("../models/user");

module.exports.updateUser = async(req,res) => {
    const { _id,name, emailId, username, contactNo, profileImage} = req.body;
     try{
       return res.send(
            await User.findByIdAndUpdate(_id,{name, 
                emailId,
               username,
               contactNo,
                profileImage},
                { new: true, runValidators: true, omitUndefined: true })
        ).exec()
     }
     catch(err){
       return res.send({err: err})
     }
}


