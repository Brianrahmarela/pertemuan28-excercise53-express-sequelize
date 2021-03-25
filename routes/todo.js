const express = require('express');
const router = express.Router()
const {getAllTodo, getTodoByID, getUserIDTodo, addTodo, deleteTodo, updateTodo} = require("../controllers/todo.controllers")

router.get("/",getAllTodo)
router.get("/:id",getTodoByID)
router.get("/user/:userId",getUserIDTodo)
router.post("/",addTodo)
router.delete("/:id",deleteTodo)
router.put("/:id",updateTodo)

module.exports = router