const express = require("express");
const db = require("../mongo.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h3>Main</h3>");
});

router.get("/api/notes", (req, res) => {
  db.find({}).then((note) => {
    res.send(note);
  });
});

/*
const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

router.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

router.get('/api/notes/:id', (req,res)=>{
  const id = req.params.id
  const note = notes.find(note=> note.id === Number(id))
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

router.delete('/api/notes/:id', (req,res)=>{
  const id = req.params.id
  notes = notes.filter(note=> note.id !== Number(id))
  res.status(204).end()
}) */

module.exports = router;
