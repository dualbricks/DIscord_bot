module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'i want help',
  execute(msg) {
    var http = require('http');
     var api = http.createClient(80, 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=76231');

  var request = api.request('GET', '/api/foo', 
    {
      'accept': 'application/json', 
      'api-key': '`${process.env.BUS_Key}`' 
    });

  request.on('response', function (response) {});    
  request.end();
  }
};