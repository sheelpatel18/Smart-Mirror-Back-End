const axios = require('axios')
const config = require('../config')
console.log(config)

const api_config = (symbol) => {
    return {
        method: 'get',
        url: `https://https://finnhub.io/api/v1/quote`,
        params: {
            token: config.STOCKS_API_KEY,
            symbol: symbol
        }
    }
}

async function getStockQuote(symbol) {
    const data = await axios(api_config(symbol)).then(res => {
        //console.log(res)
        return {
            current_price : res?.c ? res.c : "",
            change : res?.dp ? res.dp : "",
            high : res?.h ? res.h : "",
            low : res?.l ? res.l : ""
        }
    }).catch(err => {
        //console.log(err)
        throw err
    })
    return data
}

console.log(getStockQuote("AAPL"))

module.exports.getStockQuote = getStockQuote