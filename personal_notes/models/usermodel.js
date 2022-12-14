const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: 'User name is Required'
    },
    password: {
        type: String,
        required: 'Password is required'
    }
})

module.exports = mongoose.model('usermodel', userSchema)