const router = require('express').Router();
const notes = require('../../db/db.json')
const path = require('path')
const fs = require('fs')
const { nanoid } = require('nanoid')

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
  });


function createNewNote(body, notesArray) {
    let note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return note;
  }


//add note
router.post('/notes', (req, res) => {
let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
console.log(noteList)
console.log('before')
//random key generator
const randomKey = nanoid(8)
req.body.id = randomKey;


let note = createNewNote(req.body, noteList);
console.log(noteList)
console.log('after')

res.json(note);
});

//delete note 
router.delete("/notes/:id", (req, res) => {
    let notesList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const params = [req.params.id]

   
//    //filter through notes
    notesList = notesList.filter(selected =>{
        return selected.id != params;
    })
    
    
    //write the updated data to db.json and display the updated note
    fs.writeFileSync("./db/db.json", JSON.stringify(notesList));
    res.json(notesList);
});




module.exports = router;