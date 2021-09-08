const express = require('express')
const { firestoreCollection } = require('../setup/objects')
const router = express.Router()
const { responses } = require('../setup/responses');
const { firestore } = require('../server');
const apps = new firestoreCollection(firestore.collection('Apps'))
const { getStockQuote } = require('../route_helpers/stocks');

router.get('/weather', (req, res) => {
    getWeather().then((data, err) => {
        if (err) throw err
        res.status(200).json(responses[200]("GET Weather", weatherData))
    })
})

const sampleAppDBData = {
    stocks: {
        "APPL": "Apple Inc",
        "GOOGL": "Google Inc"
    },
    sports: {
        NCAAF: {
            UNC: "University of North Carolina at Chapel Hill"
        }
    }
}


router.route('/financials')
    .get((req, res) => {
        var stockData = new Array()
        apps.get(req.query.id).then((data, err) => {
            if (err) throw err
            Object.keys(data.stocks).forEach(symbol => {
                //const quote = await getStockQuote(symbol)
                //stockData.push(quote)
            });
            res.status(responses[200]).json("GET Stocks", stockData)
        })
    })

router.route('/sports')
    .get((req, res) => {
        apps.get(req.query.id).then((data, err) => {
            if (err) throw err
            res.status(responses[200]).json("GET Stocks", data)
        })
    })

router.route('/calender')
    .get((req, res) => {
        
    })




module.exports = router