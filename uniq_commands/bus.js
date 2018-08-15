module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'bus busstopcode busNo',
  execute(msg) {
    var busStop = msg.content.split(' ')[1]
    var busNo = msg.content.split(' ')[2]
    var request = require('request');
    var options = {
      url: 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=65191',
      headers: {
      'accept': 'application/json', 
      'AccountKey': `${process.env.BUS_Key}`,
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var rawdata = body
        var parsed = JSON.parse(rawdata)
        return parsed
      }
    }
   var bus_data = request(options, callback);
   function busArrivalTime(buscode, busNo, bus_data) {
      for(var i = 0; i < bus_data.length-1 
   
   }
  }
}