const request = require('request');

const weather = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=cbd7c435f51d7b05a30a013713ee59f8&query=" + latitude + "," + longitude + "&units=s";
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("unable to connect with weather stack!", undefined);
        }
        else if (body.error) {
            callback("unable to find the location!", undefined);
        }
        else {
            callback(undefined, body.current.weather_descriptions+ " is the weather forecast and current weather is " + body.current.temperature);
        }
    });
}


module.exports = weather;
// weather(37, 34, (error, data) => {
//     console.log("Error: " + error);
//     console.log("Data: " + data);
// }); 