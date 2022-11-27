const User = require('../models/User')

exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}


exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}