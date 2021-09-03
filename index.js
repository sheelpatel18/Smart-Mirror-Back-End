const express = require('express')
const { default: responses } = require('./responses')
const { default: getWeather } = require('./weather')
const app = express()
const port = process.env.port || 8080

app.use(express.json())
app.get('/ping', (req, res) => {
    res.status(200).json(responses.ping)
})
app.get('/weather', (req, res) => {
    const weatherData = await getWeather()
    weatherData ? 
        res.status(200).json(responses.weather200(weatherData)) : 
        res.status(500).json(responses.server_error)
})

app.listen(port)