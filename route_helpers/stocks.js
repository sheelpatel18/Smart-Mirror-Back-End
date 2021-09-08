const axios = require('axios')
const { config } = require('../setup/config')

const api_config = (symbol) => {
    return {
        method: 'get',
        url: `https://https://finnhub.io/api/v1/quote`,
        params: {
            token: config.STOCKS_API_KEY,
            sumbol: symbol
        }
    }
}

async function getStockQuote(symbol) {
    const res = await axios(api_config(symbol))
    return {
        current_price : res.c,
        change : res.dp,
        high : res.h,
        low : res.l
    }
}

module.exports.getStockQuote = getStockQuote