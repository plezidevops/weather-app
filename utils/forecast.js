const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const accessKey = '972f6a11ef0930bd5f3b80e7508bfeb4';
  const encodeURI = encodeURIComponent(latitude + ',' + longitude);
  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${encodeURI}&units=f`;

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to eather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const [temperature, feelslike] = [body.current.temperature, body.current.feelslike];
      weatherDescription = body.current.weather_descriptions[0];
      callback(undefined, {
        temperature,
        feelslike,
        weatherDescription
      });
    }
  });
};

module.exports = forecast;