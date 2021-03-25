const Todo = require('../models/Todo');

module.exports = {
  getAllTodo: async (req, res) => {
    const todo = await Todo.findAll()

    res.json({
      message: "success get all data",
      //ambil semua data ditapung variable todo
      data: todo
    })
  },
  getTodoByID: async (req,res)=> {
    const todo = await Todo.findOne ({
      where: {id: req.params.id}
    })

    res.json({
      message: "success get todo ID",
      data: todo
    })
  },
  getUserIDTodo: async (req,res)=> {
    const todo = await Todo.findAll ({
      where: {userId: req.params.userId}
    })

    res.json({
      message: "success get userID Todo",
      data: todo
    })
  },
  addTodo: async (req,res)=> {
    try{
      const newData = await Todo.create(req.body)

      res.status(200).json({
        message: "success add todo",
        data: newData
      })
    } catch (e) {
      console.log(e);
    }
    
  },
  deleteTodo: async (req,res)=> {
    await Todo.destroy ({
      where: {id: req.params.id}
    })

    res.json({
      message: "success delete data todo",
    })
  },
  updateTodo: async (req,res)=> {
      await Todo.update(req.body, {
      where: { id: req.params.id }
      // returning: true
    });

    res.json({
      message: "success update data",
      // data: result
    })
  },

}
