const userModel = require(`../models/index`).user
const md5 = require('md5')

exports.addUser = (req, res) => {
    let newUser = {
        name: req.body.name,
        username: req.body.username,
        password: md5(req.body.password),
        role: req.body.role
    }
    userModel.create(newUser).then(result => {
        let userData = {
            id: result.id,
            name: result.name,
            username: result.username,
            role: result.role
        }
        return res.json({
            success: true,
            data: userData,
            message: 'New User has been added'
        })
    })
    .catch(error => {
        return res.json({
            success: false,
            message: error.message
        })
    })
}


exports.updateUser = (req, res) => {
    let dataUser = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    }

    let idUser = req.params.id;

    userModel.update(dataUser, { where: { id: idUser } })
    .then(result => {
        
        return res.json({
            success: true,
            message: 'User data has been updated',
            data: dataUser
        })
    })
    .catch(error => {
        
        return res.json({
            success: false,
            message: error.message
        })
    })
}


exports.getUserById = async (req, res) => {
    const { id } = req.params
    let userData = await userModel.findOne({ where: { id: id } })
    if (!userData) {
        return res.status(404).json({
            success: false,
            message: 'User with ID ${id} not found'
        })
    }
    userData = {
        id: userData.id,
        name: userData.name,
        username: userData.username,
        role: userData.role,
    }

    return res.json({
        status: 'success',
        data: userData
    })
}