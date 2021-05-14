module.exports = {
  name: "details",
  description: "pokemon bot",
  usage: "details!",
  execute(msg) {
    const Discord = require("discord.js");
    const pokemon_details = new Discord.MessageEmbed();
    const fs = require("fs"); //importing file save
    var xpPath = "./data-pokemon.json";
    var xpRead = fs.readFileSync(xpPath);
    var xpFile = JSON.parse(xpRead);
    var name = msg.author.id;
    pokemon_details
      .setTitle(`POKEMONS CAUGHT: total ${xpFile[name].total_number}`)
      .setDescription("catch them all");
    for (var i = 0; i < xpFile[name].total_number ; i++) {
      pokemon_details.addField(
        `${xpFile[name].pokemons_caught[i]}`,
        `${xpFile[name].img_pokemon[i]} `
      );

      
    }
    pokemon_details.setFooter(`${JSON.stringify(xpFile[name].balls)}`);
      msg.reply(pokemon_details);
  }
};
