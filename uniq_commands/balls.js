module.exports = {
  name: "balls",
  description: "give you balls",
  usage: "!balls",
  execute(msg) {
    const Discord = require("discord.js");
    var Pokedex = require("pokedex-promise-v2");
    var P = new Pokedex();
    const balls_got = new Discord.MessageEmbed();
    P.getItemCategoryByName("standard-balls")
      .then(function(response) {
        var random = Math.floor(Math.random() * 6);
        console.log(response.items);
        P.getItemByName(response.items[random].name).then(function(response2) {
          balls_got
            .setTitle(`congrats you got ${response2.name}`)
            .setImage(response2.sprites.default);
          msg.reply(balls_got);
        }).catch(function(error) {
          console.log("an error has occurred.")
        });
      })
      .catch(function(error) {
        console.log("An error has occurred");
      });
  }
};
