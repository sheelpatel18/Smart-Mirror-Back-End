require('dotenv').config()
const config = {
    OPEN_WEATHER_API_KEY : process.env.OPEN_WEATHER_API_KEY,
    GCP_KEY_PATH : process.env.GCP_KEY_PATH,
    PORT: NaN
}

module.exports.config = config