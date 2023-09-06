// const request = require('request');
const axios = require("axios");

const weather = async (latitude, longitude, callback) => {
    try {
        const url = "http://api.weatherstack.com/current?access_key=cbd7c435f51d7b05a30a013713ee59f8&query=" + latitude + "," + longitude + "&units=s";
        // request({ url, json: true }, (error, { body }) => {

        const responseData = await axios.get(url);

        if(responseData.data.error) {
            callback("unable to find the location!", undefined);
        }
        else {
            callback(undefined, responseData.data.current.weather_descriptions + " is the weather forecast and current weather is " + responseData.data.current.temperature);
        }
    }
    catch(error) {
        callback("unable to connect with weather stack!", undefined);
    }
}

    module.exports = weather;
    // weather(111111111111111111, 34, (error, data) => {
    //     console.log("Error: " + error);
    //     console.log("Data: " + data);
    // }); 