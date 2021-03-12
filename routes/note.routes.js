const express = require("express");
const Note = require("../models/note.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h3>Main</h3>");
});

router.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});

router.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.findById(id).then((note) => {
    if (note) {
      res.json(note);
    } else {
      res.status(404).end();
    }
  });
});

router.post("/api/notes", (req, res) => {
  const body = req.body;

  if (!body.content) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  note.save().then((note) => {
    res.json(note);
  });
});

router.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;

  Note.findByIdAndRemove(id).then((noteDeleted) => {
    res.json(noteDeleted).end();
  });
});

module.exports = router;
