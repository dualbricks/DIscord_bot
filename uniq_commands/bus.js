module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'i want help',
  execute(msg) {
    var http = require('http');
  var request = http.request('GET', '/api/fo', 
    {
      'accept': 'application/json', 
      'api-key': `${process.env.BUS_Key}` 
    });

  request.on('response', function (response) {});    
  request.end();
  }
};