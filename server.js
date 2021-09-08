const express = require('express')
const router = express.Router()
const { responses } = require('./responses')
const { getWeather } = require('./weather')
const { config } = require('./config')
const admin = require('firebase-admin');
const { firestoreCollection } = require('./objects')
const appRoute = require('./routes/apps')
const systemRoute = require('./routes/system')
const app = express()
const port = 8080
admin.initializeApp({ credential: admin.credential.cert(config.GCP_KEY_PATH) });

app.use(express.json())

app.get('/ping', (req, res) => {
    res.status(200).json(responses[200]("PING", {}))
})

app.use('/apps', appRoute)
app.use('system', systemRoute)
app.listen(port)