const { authorize } = require('../controller/auth.controller')
//load library
const express = require('express')
//initiate object that instance of express
const app = express()

//allow to read request with json type

app.use(express.json())

//load members controller
const userController = 
require('../controller/user.controller')

//create route to get data with method POST
app.post("/", [authorize], userController.addUser)

//create route to update member using method PUT
app.put("/:id", [authorize], userController.updateUser)

app.get("/:id", [authorize], userController.getUserById)

module.exports = app