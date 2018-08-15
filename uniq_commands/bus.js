module.exports = {
  name: 'bus',
  description : 'Bus',
  usage : 'bus busstopcode busNo',
  execute(msg) {
    var EventEmitter = require("events").EventEmitter;
    var bus_data = new EventEmitter();

    var busStop = msg.content.split(' ')[1]
    var busNo = msg.content.split(' ')[2]
    var request = require('request');
    var options = {
      url: `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`,
      headers: {
      'accept': 'application/json', 
      'AccountKey': `${process.env.BUS_Key}`,
      }
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var rawdata = body
        var parsed = JSON.parse(rawdata)
        console.log(parsed.Services[1].ServiceNo)
        console.log(busNo)
        for(var i = 0; i < parsed.Services.length-1; i++)  {
          if(parsed.Services[i].ServiceNo == busNo) {
            var busTime1 = parsed.Services[i].NextBus.EstimatedArrival 
            console.log("pass")
          }
        }
        
        
        var timeNow = new Date()
        var timeHour = timeNow.geHours()
        var timeMin = timeNow.getMinutes()
        var timeSec = timeNow.getSeconds()
        var timeIRL = ( (timeHour) % (60*60) ) + (timeMin) % 60 + timeSec
        msg.reply(`next bus at ${busTime1}`)
      }
    }
    request(options, callback);
  }
}