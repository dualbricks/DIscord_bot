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
    pokemon_details.setTitle("POKEMONS CAUGHT:").setDescription("catch them all")
    for(var i = 0; i < xpFile[name].total_number -1;i++) {
      pokemon_details.setField({name:xpFile[name].pokemons_caught[i], value:xpFile[name].img_pokemon[i]});
    }
    
    msg.reply(pokemon_details)
  
  }
}
