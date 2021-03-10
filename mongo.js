const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://slqpez:${password}@cluster0.x8sld.mongodb.net/notes-db
`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Esta es otra nota',
  date: new Date(),
  important: true,
})

/*  note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})  */

Note.find({}).then(result => {
  console.log(result)
  mongoose.connection.close()
})



