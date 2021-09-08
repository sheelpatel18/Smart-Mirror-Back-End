const { getWeather } = require('../route_helpers/weather')
const admin = require('firebase-admin');
const { config } = require('./config');
const { firestoreCollection } = require('./objects');
admin.initializeApp({ credential: admin.credential.cert(config.GCP_KEY_PATH) });
const firestore = admin.firestore()
const system = new firestoreCollection(firestore.collection('System'))

getWeather().then(res => console.log(res))
