const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')
const categoryRouter = require('./routes/category-router')
const songRouter = require('./routes/song-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Backend Ready!')
})

app.use('/api', [movieRouter, categoryRouter, songRouter]);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
