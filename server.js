const express = require('express')
const app = express()
const tasks = require('./routes/tasks');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server is running');
})

app.use('/api/v1/tasks', tasks)

const PORT = 5000

app.listen(PORT, console.log(`server is running at http://localhost:${PORT}/`))

