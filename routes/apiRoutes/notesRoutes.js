const router = require('express').Router();
const notes = require('../../db/db.json')
const path = require('path')
const fs = require('fs')
const { nanoid } = require('nanoid')

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
  });

router.get('/notes', (req,res) => {
    let results = notes

    res.json(results)
    
})

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return note;
  }


router.post('/notes', (req, res) => {

//random key generator
const randomKey = nanoid(8)
// set id based on what the next index of the array will be
req.body.id = randomKey;


const note = createNewNote(req.body, notes);
res.json(notes);
});




module.exports = router;