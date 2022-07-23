const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=872f6a11ef0930bd5f3b80e7508bfeb4&query=NY&units=f';

request({ url: url, json: true }, (error, response, body) => {
  //const temperature = body.current.temperature;
  //const feelslike = body.current.feelslike;
  const [temperature, feelslike] = [body.current.temperature, body.current.feelslike];
  weatherDescription = body.current.weather_descriptions[0];
  console.log(`It is currently ${temperature} degrees Fahrenheit out. It feels like ${feelslike} out. It is ${weatherDescription}.`);

});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGlwaXpvIiwiYSI6ImNsNXlnYmY0eTB0ZWozam1tdHpwYjVwZHUifQ.6YJVhN0gbzDJCZSnjZn0tQ#downloadJSON=true';

request({ url: geocodeURL, json: true }, (error, response, body) => {
  const [longitude, latitude] = [body.features[0].center[0], body.features[0].center[1]];
  console.log(longitude, latitude);
});