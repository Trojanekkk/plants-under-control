const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/metric/new', (req, res) => {
    console.log(req.query)
    res.status(200).send()
})

app.listen(process.env.API_PORT, () => {
    console.log(`API is running at http://192.168.0.38:${process.env.API_PORT}`)
})