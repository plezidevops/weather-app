const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const args = process.argv.slice(2);
console.log(args);
if (args.length > 0) {
  address = args.join(' ');

  geocode(address, (error, data) => {
    if (error) {
      return error;
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return error;
      }

      const { temperature, feelslike, weatherDescription } = forecastData;
      console.log(`It is currently ${temperature} degrees Fahrenheit in ${data.placeName}. It feels like ${feelslike} out. It is ${weatherDescription}.`);

    });

  });

} else (
  console.log("Please provide an address.")
);