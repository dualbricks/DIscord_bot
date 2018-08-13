module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'i want help',
  execute(msg) {
    const request = require('request');

    request('http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
});
  }
};