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
    for(var i = 0; i < xpFile[name].total_number -1;i++) {
      if( !xpFile[name].img_pokemon == null && !xpFile[name].pokemons_caught == null){ 
      pokemon_details.addField(
        `${xpFile[name].pokemons_caught[i]}`, `${xpFile[name].img_pokemon[i]} `
      );
    }
    for(var j = 0; j < xpFile[name].balls -1; j++) {
      pokemon_details.addField(`${xpFile[name].balls[j]}`);
    }
    pokemon_details.setFooter(`${xpFile[name].balls}`)
    msg.reply(pokemon_details)}
  
  }
}
