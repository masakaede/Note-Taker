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

    // delete a note
    app.delete('/api/notes/:id', function (req, res) {

        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id === req.params.id) {
                console.log(`${notes[i].title} deleted from the note`)
                notes.splice(i, 1)
            }
        }
        res.json(notes)
    });
}
