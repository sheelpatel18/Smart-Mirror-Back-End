const express = require('express')
const router = express.Router()
const { responses } = require('./setup/responses')
const { getWeather } = require('./route_helpers/weather')
const { config } = require('./setup/config')
const admin = require('firebase-admin');
const { firestoreCollection } = require('./setup/objects')
const appRoute = require('./apps')
const systemRoute = require('./system')
const app = express()
const port = 8080
admin.initializeApp({ credential: admin.credential.cert(config.GCP_KEY_PATH) });
const firestore = admin.firestore()
const system = new firestoreCollection(firestore.collection('System'))
app.use(express.json())

app.get('/ping', (req, res) => {
    res.status(200).json(responses[200]("PING", {}))
})

app.use('/apps', appRoute)
app.use('/system', systemRoute)

app.listen(port)