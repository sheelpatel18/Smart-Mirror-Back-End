const { config } = require("./config");
const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore
const system = firestore.collection('system')

async function getInfo(_id) {
    const documentRef = system.doc(_id);
    const document = await documentRef.get()
    return document.exists ? document.data : undefined
}

async function postInfo(data) {
    const document = await system.add(data)
    return document.exists ? document.data : null
}

async function putInfo(data, _id) {
    const documentRef = system.doc(_id)
    const document = await documentRef.get()
    return document.exists ? document.data : null
}

module.exports.system =  {
    get : getInfo(),
    post: postInfo(),
    put: putInfo()
}

const sampleData = {
    first_name : "Sheel",
    last_name: "Patel",
    timezone: "EST",
    email: "sheel.patel@me.com",
    phone: "+19198185123",
    location: {
        city: "Chapel Hill",
        state: "North Carolina",
        country: "USA",
        postal: "27516"
    }
}