const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=872f6a11ef0930bd5f3b80e7508bfeb4&query=NY&units=f';

request({ url: url, json: true }, (error, response, body) => {
  const temperature = body.current.temperature;
  const feelslike = body.current.feelslike;
  weatherDescription = body.current.weather_descriptions[0];
  console.log(`It is currently ${temperature} degrees Fahrenheit out. It feels like ${feelslike} out. It is ${weatherDescription}.`);

});