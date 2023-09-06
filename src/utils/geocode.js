// const request = require('request');
const axios = require("axios");

const geoCode = async (address, callback) => {
    try {
        const geocodingUrl = "https://geocode.maps.co/search?q=" + encodeURIComponent(address);
        // request({ url: geocodingUrl, json: true }, (error, { body }) => {
        const response = await axios.get(geocodingUrl);

        if (response.data[0] === undefined) {
            callback("UNABLE TO FIND THE LOCATION!", undefined);
        }
        else {

            callback(undefined, {
                latitude: response.data[0].lat,
                longitude: response.data[0].lon,
                location: response.data[0].display_name
            }
            );
        }
    }
    catch (error) {
        callback("UNABLE TO CONNECT WITH LOCATION SERVICE!", undefined);
    }

}

module.exports = geoCode;

// geoCode('Rajkot', (error, data) => {
//     console.log("Error: " + error);
//     // console.log(data.latitude);
//     console.log("Data: " + data);
// })