const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=67028833228e62b5afe400080c7e9023&query=${latitude},${longitude}&units`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const {
        temperature,
        humidity,
        feelslike,
        weather_descriptions: [weather_description],
      } = body.current;
      callback(
        undefined,
        `${weather_description}: It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.The Humidity is ${humidity}%.`
      );
    }
  });
};
module.exports = forecast;
