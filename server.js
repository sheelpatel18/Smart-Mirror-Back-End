require('dotenv').config()
const express = require('express')
const { responses } = require('./setup/responses')
const config = require('./config')
const admin = require('firebase-admin')
admin.initializeApp({ credential: admin.credential.cert(config.GCP_KEY_PATH) });
module.exports.firestore = admin.firestore()
const app = express()
const port = process.env.PORT || 8080
const appRoute = require('./routes/apps')
const systemRoute = require('./routes/system')
app.use(express.json())

app.get('/ping', (req, res) => {
    res.status(200).json(responses[200]("PING", {}))
})

app.use('/apps', appRoute)
app.use('/system', systemRoute)

app.listen(port)