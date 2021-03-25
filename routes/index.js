const express =require('express');
const router = express.Router()
const userRouter = require("./user")
const todoRouter = require("./todo")

//route
router.get("/", (req, res) => {
  res.json({
    message: "welcome to express"
  })
})

router.use("/user", userRouter)
router.use("/todo", todoRouter)

module.exports = router