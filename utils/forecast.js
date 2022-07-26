const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const accessKey = '2f2883797e5226a4812d6c043bdb88c6';
  const encodeURI = encodeURIComponent(latitude + ',' + longitude);
  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${encodeURI}&units=f`;

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to eather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        weatherDescription: body.current.weather_descriptions[0]
      });
    }
  });
};

module.exports = forecast;