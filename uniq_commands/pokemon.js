module.exports = {
  name: "p.pokemon",
  description: "pokemon bot",
  usage: "pokemon!",
  execute(msg) {
    const Discord = require("discord.js");
    const pokemon_caught = new Discord.MessageEmbed();
    var Pokedex = require("pokedex-promise-v2");
    var P = new Pokedex();
    var random_poke = Math.floor(Math.random() * 248);

    P.getPokemonByName(`${random_poke}`)
      .then(function(response) {
        var name = response.name;
        var img = response.sprites.front_default;
        pokemon_caught
          .setImage(img)
          .setTitle("Pokemon caught")
          .setFooter(`congrats you have caught ${name}`);
        msg.reply(pokemon_caught);
        const fs = require("fs"); //importing file save
        var xpPath = "./data-pokemon.json";
        var xpRead = fs.readFileSync(xpPath);
        var xpFile = JSON.parse(xpRead); //ready for use
        var userId = msg.author.id; //user id here

        if (!xpFile[userId].pokemons_caught) {
          //this checks if data for the user has already been created
          xpFile[userId] = {
            pokemons_caught: [name],
            img_pokemon: [img],
            total_number: 1
          };
          fs.writeFileSync(xpPath, JSON.stringify(xpFile, null, 2));
          console.log("whyyy");
        } else {
          console.log(xpFile[userId].total_number);
           xpFile[userId].total_number ++ ;
           xpFile[userId].pokemons_caught.push(name);
           xpFile[userId].img_pokemon.push(img);
          fs.writeFileSync(xpPath, JSON.stringify(xpFile, null, 2));
          console.log("success");
        }
      })
      .catch(function(error) {
        console.log("There was an ERROR: ", error);
      });
  }
};
