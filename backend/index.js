
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require('dotenv').config()

const routes = require("./routes/userRegistration")
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() =>{
    console.log("Connected to mongoDB...")
})
.catch((err) => {
    console.log(err)
})

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors())

app.use(routes)

app.post('/uploadProfile', upload.single('file'), function (req, res) {
    res.json({})
  })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

