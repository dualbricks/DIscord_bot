module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'i want help',
  execute(msg) {
   var request = require('request');

  var options = {
    url: 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139',
    headers: {
      'accept': 'application/json', 
      'AccountKey': `${process.env.BUS_Key}`,
    }
  };

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);
}
  
}