const request = require('request')

const forecast = (latitude,longtitude,callback) => {

    const url = `https://api.darksky.net/forecast/e76f8229aaf93afbd805dd5fab1c8fa6/${latitude},${longtitude}`
    request({url:url, json: true} , (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services ! ', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined) 
        } else {
            callback(undefined, body)
        }
    })
}

module.exports = forecast