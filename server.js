const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks');
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const cors = require('cors')

app.use(express.static('./public'))
app.use(express.json())
app.use(cors())

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server is running at http://localhost:${PORT}/api/v1/tasks/`))
    } catch (err) {
        console.error(err)
    }
}

start()


