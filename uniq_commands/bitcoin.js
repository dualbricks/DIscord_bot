module.exports = {
  name: "bitcoin",
  description: "bitcoin",
  usage: "bitcoin price",
  execute(msg) {
    var options = {
      url: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=false&include_last_updated_at=true`,
      headers: {
        accept: "application/json"
      }
    };
    var request = require("request");
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var rawdata = body;
        var parsed = JSON.parse(rawdata);

        msg.reply(`Bitcoin price is ${parsed.bitcoin.usd}`);
      }
    }
     request(options, callback);
  }
};
