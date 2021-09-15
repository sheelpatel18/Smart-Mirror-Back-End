const axios = require('axios')
const { config } = require('../setup/config')

async function login(email = config.CHEKHUB_EMAIL, password = config.CHEKHUB_PSSWD) {
    
}

async function getTickets() {

}

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