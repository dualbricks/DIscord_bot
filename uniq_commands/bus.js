module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'i want help',
  execute(msg) {
     var api = http.createClient(80, 'api.example.org');

  var request = api.request('GET', '/api/foo', 
    {
      'host': 'api.example.org',
      'accept': 'application/json', 
      'api-key': 'apikeygoeshere' 
    });

  request.on('response', function (response) {});    
  request.end();
});
  }
};