const request = require('postman-request');

const geocode = (address, callback) => {
  const accessToken = 'pk.eyJ1IjoidGlwaXpvIiwiYSI6ImNsNjFpeHBqaDAxbDczYmx2ajJoazlhMWcifQ.xCm63STsg0m2xNe0aVvmkQ';
  downloadJSON = true;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${accessToken}#downloadJSON=${downloadJSON}`;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to location server', undefined);
    } else if (body.features.length === 0) {
      callback('Cannot find location', undefined);
    } else {
      const [longitude, latitude] = [body.features[0].center[0], body.features[0].center[1]];
      callback(undefined, {
        longitude,
        latitude,
        placeName: body.features[0].place_name
      });
    }
  });

};



module.exports = geocode;