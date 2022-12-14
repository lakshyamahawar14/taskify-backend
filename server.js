const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Task Manager App');
})

const PORT = 5000

app.listen(PORT, console.log(`server is running at http://localhost:${PORT}/`))

