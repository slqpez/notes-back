const express = require("express")
const app = express()
const cors = require('cors')
const Router = require("./routes/note.routes.js")


require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(Router)
app.use(express.static('build'))


const PORT= process.env.PORT || 3001

 

app.listen(PORT,()=>{
    console.log(`Server on port http://localhost:${PORT}`);
})

module.exports = {app};