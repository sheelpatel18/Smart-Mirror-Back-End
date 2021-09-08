const express = require('express')
const { firestore } = require('firebase-admin')
const { firestoreCollection } = require('../objects')
const router = express.Router()
const admin = require('firebase-admin');
const { responses } = require('../responses');
const firestore = admin.firestore()
const apps = new firestoreCollection(firestore.collection('Apps'))

router.get('/weather', (req, res) => {

})


router.route('/stocks')
    .get((req, res) => {
        apps.get(req.query.id).then((data, err) => {
            if (err) throw err
            res.status(responses[200]).json("GET Stocks", data.stocks)
        })
    })
    .patch((req, res) => {
        const body = { stocks : {...req.body} }
        apps.edit(body, req.query.id).then((data, err) => {
            if (err) throw err
            res.status(201).json("PATCH Stocks", data)
        })
    })

router.route('/sports')
    .get((req, res) => {
        apps.get(req.query.id).then((data, err) => {
            if (err) throw err
            res.status(responses[200]).json("GET Stocks", data)
        })
    })
    .patch((req, res) => {
        const body = { sports : {...req.body} }
        apps.edit(req.body, req.query.id).then((data, err) => {
            if (err) throw err
            res.status(201).json("PATCH Stocks", data)
        })
    })


moduke.exports = router