const https = require('https')


const url = `https://api.darksky.net/forecast/e76f8229aaf93afbd805dd5fab1c8fa6/40,-75`

const request = https.request(url, (response) => {
    let data = ''


    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk);
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error) =>{
    console.log('An Error', error)
})

request.end()