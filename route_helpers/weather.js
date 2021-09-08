const axios = require('axios')
const { config } = require('../config')

const key = config.OPEN_WEATHER_API_KEY
const api_config = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather`,
    params: {
        lat: "35.9132",
        lon: "-79.0558",
        appid: key,
        units: "imperial"
    }
}

async function getWeather() {
    var weatherData = {}
    const getImage = (icon) => {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`
    }
    const formatWeatherDescription = (description) => {
        var modified = new Array()
        description.split(' ').forEach(word => {
            modified.push(word.charAt(0).toUpperCase() + word.slice(1))
        })
        return modified.join(' ')
    }
    const response = await axios(api_config)
    const data = response.data
    const main = data.main
    const weather = data?.weather[0] ? data.weather[0] : {}
    weatherData.current_temp = Math.round(main.temp)
    weatherData.feels_like = Math.round(main.feels_like)
    weatherData.min = Math.round(main.temp_min)
    weatherData.max = Math.round(main.temp_max)
    weatherData.loc = {
        lat: data.coord.lat,
        lon: data.coord.lon,
        name: data.name
    }
    weatherData.description = weather?.description ? formatWeatherDescription(weather.description) : null
    weatherData.image = weather?.icon ? getImage(weather.icon) : null
    return weatherData
}

module.exports.getWeather = getWeather