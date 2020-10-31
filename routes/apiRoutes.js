const uuid = require('uuid');

const notes = require('../db/db.json');

module.exports = function (app) {
    // get all notes
    app.get('/api/notes', function (req, res) {
        res.json(notes);
    });

    // post a new note
    app.post('/api/notes', function (req, res) {
        //added id to a new note
        const newNote = { id: uuid.v4(), ...req.body };

        if (notes[0]) {
            if (notes[0].title === "Test Title") {
                notes.splice(0, 1, newNote)
            } else {
                notes.push(newNote)
            }
        } else {
            notes.push(newNote)
        };

        console.log(`${newNote.title} added to the note`)
        res.json(newNote)
    });

}
