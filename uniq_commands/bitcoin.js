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
    const axios = require("axios");
    async function getRequest() {
      let data = await axios.get(options.url);
      var parsedData = JSON.parse(data);
      msg.reply(`${parsedData}`);
      msg.reply(`bitcoin price is${parsedData.bitcoin.usd}`);
    }
    getRequest();
  }
};
