const request = require('request');

const geoCode = (address, callback) => {
    const geocodingUrl = "https://geocode.maps.co/search?q=" + encodeURIComponent(address);
    request({ url: geocodingUrl, json: true }, (error, { body }) => {
        if (error) {
            callback("UNABLE TO CONNECT WITH LOCATION SERVICE!", undefined);
        }
        else if (body.length === 0) {
            callback("UNABLE TO FIND THE LOCATION!",undefined);
        }
        else {
           
            callback(undefined,{
                latitude:body[0].lat,
                longitude:body[0].lon,
                location:body[0].display_name
            }
            );
        }

    });

}

module.exports = geoCode;

// geoCode('Rajkot', (error, data) => {
//     console.log("Error: " + error);
//     // console.log(data.latitude);
//     console.log("Data: " + data);
// })