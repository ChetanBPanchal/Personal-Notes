const mongoose = require('mongoose')

var noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: 'Title URL is Required'
    },
    subject:{
        type: String,
        required: 'Subject is Required'
    },
    note_description: {
        type: String,
        required: 'Note Description is required'
    }
})

module.exports = mongoose.model('notemodel', noteSchema)