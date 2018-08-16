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

        for(var i = 0; i < parsed.Services.length-1; i++)  {
          if(parsed.Services[i].ServiceNo == busNo) {
            var busTime1 = parsed.Services[i].NextBus.EstimatedArrival 
            console.log(busTime1)
          }
        }
        
        var time_bus = busTime1.split(/[T+]/)[1]
        console.log(time_bus)
        var busRealHours = time_bus.split(":")
        var busComingSecs = Math.floor(busRealHours[0] * (60*60)) + Math.floor(busRealHours[1] * 60) + Math.floor(busRealHours[2])
        console.log(busComingSecs)
        var timeNow = new Date()
        var timeHour = timeNow.getHours() + 8
        console.log(timeHour)
        var timeMin = timeNow.getMinutes()
    
        var timeSec = timeNow.getSeconds()
    
        var timeIRL = Math.floor((timeHour) * (60*60)) + Math.floor((timeMin) * 60) + Math.floor(timeSec)
        console.log(timeIRL)
        var estimatedTime = busComingSecs - timeIRL
        var estimatedMin = Math.floor(estimatedTime / 60)
        if( estimatedMin <=  0.5) {
          
          estimatedMin = "Arriving"
          msg.reply(`Next bus ,${busNo}, ${estimatedMin}`)
        }
        else {
          msg.reply(`Next bus,${busNo}, in ${estimatedMin} Minutes`)
                        }               
      }
    }
    request(options, callback);
  }
}