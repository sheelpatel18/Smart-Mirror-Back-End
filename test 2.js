const { getWeather } = require('./weather')

getWeather().then(res => console.log(res))