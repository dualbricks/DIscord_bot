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
    for (var i = 0; i < keysArray.length; i++) {
      var key = keysArray[i]; // here is "name" of object property
     var value = parsed[key]; // here get value "by name" as it expected with objects
   console.log(key, value);
  }
}
}
request(options, callback);
  
}
}