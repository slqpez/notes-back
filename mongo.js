const mongoose = require("mongoose");


require('dotenv').config()
const password = process.env.DB_PASSWORD;
 const url = `mongodb+srv://slqpez:${password}@cluster0.x8sld.mongodb.net/notes-db
`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);


module.exports = Note;


