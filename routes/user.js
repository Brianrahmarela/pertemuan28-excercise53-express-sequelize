const express = require('express');
const router = express.Router()
const {getAllUser,getUserByID, addUser, deleteUser, updateUser} = require("../controllers/user.controller")

router.get("/",getAllUser)
router.get("/:id",getUserByID)
router.post("/",addUser)
router.delete("/:id",deleteUser)
router.put("/:id",updateUser)

module.exports = router