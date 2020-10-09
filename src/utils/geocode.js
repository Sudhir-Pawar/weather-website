const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic3VkaGlyMjQiLCJhIjoiY2tmdGl1ang3MHFvdzJycnA3YnN2bWxhYiJ9.a6YfvWBHJ_NKtmKOGw8fuQ&limit=1`;
  request({ url, json: true }, (err, { body } = {}) => {
    if (err) {
      callback("Unable to connect to geocode service!", undefined);
    } else if (body.message || body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      const {
        features: [
          {
            center: [longitude, latitude],
            place_name: location,
          },
        ],
      } = body;
      callback(undefined, { latitude, longitude, location });
    }
  });
};

module.exports = geocode;
