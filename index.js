const express = require('express')
const app = express()
const port = 3000
// route 
app.get('/abc', (req, res) => res.send( 'Hello Worlddd!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
