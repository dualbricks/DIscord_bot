module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'i want help',
  execute(msg) {
   var request = require('request');

  var options = {
    url: 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=76231',
    headers: {
      'accept': 'application/json', 
      'AccountKey': `${process.env.BUS_Key}`,
    }
  };

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var rawdata = body
    var parsed = JSON.parse(rawdata)
    var keysArray = Object.keys(parsed);
    console.log(keysArray.Services[1].Nextbus)
    
}
}
request(options, callback);
  
}
}