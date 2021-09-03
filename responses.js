export default responses = {
    ping: {
        "action": "PING",
        "status": 200,
        "message": "OK"
    },
    server_error: {
        "acction": "ERR",
        "status": 500,
        "message": "Internal Server Error"
    },
    weather200: (data) => {
        return {
            "action": "GET weather",
            "status": 200,
            "message": "OK",
            "data": data
        }
    }
}