module.exports = {
  name: "balls",
  description: "give you balls",
  usage: "!balls",
  execute(msg) {
    const fs = require("fs");
    const Discord = require("discord.js");
    var Pokedex = require("pokedex-promise-v2");
    var P = new Pokedex();
    var number = Math.floor(Math.random() * 4);
    const balls_got = new Discord.MessageEmbed();
    P.getItemCategoryByName("standard-balls")
      .then(function(response) {
        var random = Math.floor(Math.random() * 6);
        P.getItemByName(response.items[random].name)
          .then(function(response2) {
            var name_ball = response2.name;
            balls_got
              .setTitle(`congrats you got ${number} ${response2.name}`)
              .setImage(response2.sprites.default);
            var xpPath = "./data-pokemon.json";
            var xpRead = fs.readFileSync(xpPath);
            var xpFile = JSON.parse(xpRead); //ready for use
            var userId = msg.author.id; //user id here
            if(!xpFile[userId]) {
              xpFile[userId] = {
                balls : {}
              }
            }
            msg.reply(balls_got);
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log("An error has occurred");
      });
  }
};
