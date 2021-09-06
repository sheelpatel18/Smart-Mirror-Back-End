const express = require('express')
const axios = require('axios')
const { default: responses } = require('./responses')
const { getWeather } = require('./weather')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.get('/ping', (req, res) => {
    res.status(200).json(responses[200]("PING", {}))
})
app.get('/weather', (req, res) => {
    const weatherData = await getWeather()
    weatherData ? 
        res.status(200).json(responses[200]("GET Weather", weatherData)) : 
        res.status(500).json(responses[500])
})

app.route('system')
    .get((req, res) => {
        const data = { // sample data
            timezone: "EST",
            location: "XXX",
        }
        res(200).json(responses[200]("GET System Info", data))
    })
    .post((req, res) => {
        res.json(201).json(responses[201]("POST System Info", data))
    })
    .put((req, res) => {
        const data = { // sample data
            timezone: "EST",
            location: "XXX",
        }
        res.json(201).json(responses[201]("PUT System Info", data))
    })

app.listen(port)