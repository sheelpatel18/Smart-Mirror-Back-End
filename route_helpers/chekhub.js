const axios = require('axios')
const { config } = require('../config')

async function login(email = config.CHEKHUB_EMAIL, password = config.CHEKHUB_PSSWD) {
    const api_config = { // has to be completed
        method: 'post',
        url: `https://api.test.chekhub.com/v2/system/login`,
        auth: {
            username: "ajay@chekhub.com",
            password: "ChekHub2020"
        }
    }
    const res = await axios(api_config).then(res => {
        return res
    }).catch(err => {
        throw err
    })
    return res?.data?.data?.access_token ? res.data.data.access_token : ""
}

async function getTickets(access_token="some_random_token", org_id="5eb99082633e15201c776b34", member_id = "") {
    const api_config = {
        method: 'get',
        url: `https://api.test.chekhub.com/v3/tickets/`,
        headers: {
            'Authorization': 'Bearer ' + access_token
        },
        params: {
            organization_id: org_id,
            types: "issue",
            participant_ids: "5eb99082633e15201c776b39"

        }
    }
    const data =  await axios(api_config).then((res) => {
        return res.data
    }).catch(async (err) => {
        if (err.response.status == 401) {
            const access_token = await login().then(res => {
                return res
            }).catch(err => {
                throw err
            })
            return await getTickets(access_token).then(res => {
                return res
            }).catch(err => {
                throw err
            })
        } else {
            throw err
        }
    })
    return data
}

console.log(getTickets())

module.exports = {
    getTickets: getTickets(),
    login: login()
}