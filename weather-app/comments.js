
// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log(`Unable to connect to weather service!`);
//     }else if (response.body.error){
//         console.log('Unable to find location!');
//     } else{
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`)
//     }

    

// })

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if(error){
//         console.log(`Unable to connect to location services!`);
//     }else if(response.body.features.length == 0){
//         console.log(`Unable to find latidude and longitude`);
//     } else{
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
    
// })


// const geocodeURL =  "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1Ijoic2hpbmljb2RlIiwiYSI6ImNqd2Q5dThqbjBvcGg0OW51NHFzOHQ2bnoifQ.2FaMVxm_A4PT_Z9XzmQUUA&limit=1"

// const url = 'https://api.darksky.net/forecast/e76f8229aaf93afbd805dd5fab1c8fa6/37.8267,-122.4233'
