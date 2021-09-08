require('dotenv').config()

const config = {
    OPEN_WEATHER_API_KEY : process.env.OPEN_WEATHER_API_KEY, // KEY
    GCP_KEY_PATH : process.env.GCP_KEY_PATH, // PATH TO JSON FILE
    PORT: process.env.PORT, // OPTIONAL EXPRESS PORT
    STOCKS_API_KEY: process.env.STOCKS_API_KEY // Stocks API key
}

module.exports.config = config