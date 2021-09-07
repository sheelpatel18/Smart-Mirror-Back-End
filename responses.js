module.exports.responses = {
    200: (action, data) => {
        return {
            "action": action,
            "status": 200,
            "message": "OK",
            data: data
        }
    },
    201: (action, data) => {
        return {
            "action": action,
            "status": 201,
            "message": "CREATED",
            data: data
        }
    },
    401: (action) => {
        return {
            "action": action,
            "status": 401,
            "message": "UNAUTHORIZED"
        }
    },
    500: {
        "acction": "ERROR",
        "status": 500,
        "message": "Internal Server Error"
    },
}