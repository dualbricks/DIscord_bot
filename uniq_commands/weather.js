module.exports = {
  name: 'weather',
  description: 'forecast',
  usage: 'weather locationNo',
  execute(msg) {
    var EventEmitter = require('events').EventEmitter;
    var weather_data = new EventEmitter();
    var time = new Date()
    console.log(time)
    var weatherlocation = msg.content.split(' ')[1]
    var request = require('request');
    var options = {
      url: `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${time}`
    }
  }
}