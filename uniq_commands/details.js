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
    pokemon_details.setTitle(`POKEMONS CAUGHT: total ${xpFile[name].total_number}`).setDescription("catch them all")
    console.log(xpFile[name].img_pokemon);
    console.log(xpFile[name].img_pokemon[1]);
    
    
    var string_names = String(xpFile[name].pokemons_caught[i])
    
    for(var i = 0; i < xpFile[name].total_number -1;i++) {
      pokemon_details.addField({name:string_names, value:xpFile[name].img_pokemon[i]});
    }
    
    msg.reply(pokemon_details)
  
  }
}
