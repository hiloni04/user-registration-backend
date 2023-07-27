const User = require("../models/user");
// multer = require('multer'),
// uuidv4 = require('uuid/v4'),

// DIR = './public/';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
// upload.single('profileImg'), (req, res, next) => {
//     const url = req.protocol + '://' + req.get('host')
//     const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         profileImg: url + '/public/' + req.file.filename

module.exports.addUser = async(req,res) => {
    const { name, emailId, username,password, contactNo, profileImage} = req.body;
    const newUser = 
    { name, 
     emailId,
    username,
    password,
    contactNo,
     profileImage}
     try{
       return res.send(
            await User.create(newUser , )
        )
     }
     catch(err){
       return res.send({err: err})
     }
}

