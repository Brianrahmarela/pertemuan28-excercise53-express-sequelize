const User = require('../models/User');

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll()

    res.json({
      message: "success get all data",
      //mbil semua data ditapung variable users
      data: users
    })
  },
  getUserByID: async (req,res)=> {
    const user = await User.findOne ({
      where: {id: req.params.id}
    })

    res.json({
      message: "success get data ID",
      data: user
    })
  },
  addUser: async (req,res)=> {
    try{
      const newData = await User.create(req.body)

      res.status(200).json({
        message: "success add data",
        data: newData
      })
    } catch (e) {
      console.log(e);
    }
    
  },
  deleteUser: async (req,res)=> {
    await User.destroy ({
      where: {id: req.params.id}
    })

    res.json({
      message: "success delete data",
    })
  },
  updateUser: async (req,res)=> {
    const result = await User.update(req.body, {
      where: { id: req.params.id }
      // returning: true
    });

    res.json({
      message: "success update data",
      // data: result
    })
  },

}