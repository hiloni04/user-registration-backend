const {Router} = require("express");

const {addUser} = require("../controller/addUser")
const { updateUser } = require("../controller/updateUser");
const { getUser } = require("../controller/getUser");
const { deleteUser } = require("../controller/deleteUser");



const router = Router();

router.get("/", getUser)
router.post("/addUser", addUser)
router.patch("/updateUser", updateUser)
router.delete("/deleteUser", deleteUser)


module.exports = router;