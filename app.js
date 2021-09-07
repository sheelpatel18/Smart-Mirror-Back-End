const express = require('express')
const axios = require('axios')
const { responses } = require('./responses')
const { getWeather } = require('./weather')
const { config } = require('./config')
const admin = require('firebase-admin');
const { firestoreCollection } = require('./objects')
const app = express()
const port = 8080
admin.initializeApp({ credential: admin.credential.cert(config.GCP_KEY_PATH) });
const firestore = admin.firestore()
const system = new firestoreCollection(firestore.collection('System'))
app.use(express.json())

app.get('/ping', (req, res) => {
    res.status(200).json(responses[200]("PING", {}))
})
app.get('/weather', (req, res) => {
    getWeather().then((data, err) => {
        if (err) throw err
        res.status(200).json(responses[200]("GET Weather", weatherData))
    })
})

const sampleData = {
    first_name : "Sheel",
    last_name: "Patel",
    timezone: "EST",
    email: "sheel.patel@me.com",
    phone: "+19198185123",
    location: {
        city: "Chapel Hill",
        state: "North Carolina",
        country: "USA",
        postal: "27516"
    }
}

app.route('/system')
    .get((req, res) => {
        system.get(req.query.id).then((data, err) => {
            if (err) throw err
            res.status(200).json(responses[200]("GET System Info", data))
        })
    })
    .post((req, res) => {
        system.add(req.body).then((data, err) => {
            if (err) throw err
            res.status(201).json(responses[201]("POST System Info", data))
        })
    })
    .put(async (req, res) => {
        system.replace(req.body, req.query.id).then((data, err) => {
            if (err) throw err
            res.status(201).json(responses[201]("PUT System Info", data))
        })
    })
    .delete((req, res) => {
        system.delete(req.query.id).then((data, err) => {
            if (err) throw err
            res.status(200).json(responses[201]("DELETE System Info", data))
        })
    })
    .patch(async (req, res) => {
        
    })

app.listen(port)