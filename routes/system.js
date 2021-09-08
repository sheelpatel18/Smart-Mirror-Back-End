const express = require('express')
const router = express.Router()
const admin = require('firebase-admin')
const firestore = admin.firestore()
const system = new firestoreCollection(firestore.collection('System'))

router.route('/system')
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
    .put((req, res) => {
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
    .patch((req, res) => {
        system.edit(req.body, req.query.id).then((data, err) => {
            if (err) throw err
            res.status(201).json(responses[201]("PATCH System Info", data))
        })
    })
    
module.exports = router