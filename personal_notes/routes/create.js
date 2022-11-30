const express = require('express');
const router = express.Router();

// import notemodel
const noteTemp = require('../models/notemodel')

router.get('/', (req,res) => {    
    //Query the Model to Fatch the Data Uploaded to the Server
    noteTemp.find((err, allNotes) => {        
        if(err){
            console.log(err)
        }else{
            res.render('notes/index', {
                title: 'Notes Manager',
                allNotes: allNotes
            })
        }
    })
})

// GET: /notes/create
router.get('/create',(req,res) => {
    res.render('/notes/')
})

// POST: /notes/create
router.post('/create',(req,res) => {
    noteTemp.create(req.body, (err, newNoteModel) => {

        if(err){
            console.log(err)
        }else{
            res.redirect('/notes')
        }
    })
})

// GET: //notes/delete/ => delete selected
router.get('/delete/:_id', (req, res) => {
    
    // use Mongoose to delete selected doc & redirect
    noteTemp.remove({ _id: req.params._id }, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/notes')
        }
    })
})

router.get('/edit/:_id', (req,res) => {    

    noteTemp.find((err, allNotes) => {        
        if(err){
            console.log(err)
        }else{
            noteTemp.findById(req.params._id, (err, allnote) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.render('notes/edit', { 
                        title: 'Notes Deatils',
                        allNotes: allnote
                    })
                }
            })           

        }
    })    
})

// POST: /employers/edit/abc123 => update the db for the selected doc
router.post('/edit/:_id', (req, res) => {
    noteTemp.findByIdAndUpdate({ _id: req.params._id }, req.body, null, (err, allNotes) => {
        if (err) {
            console.log(err)
        }else {
            res.redirect('/notes')
        }
    })
})

// make public
module.exports = router