module.exports = {
    name: 'p.pokemon',
    description: 'pokemon bot',
    usage: 'pokemon!',
    execute(msg) {
      const Discord = require('discord.js');
      const pokemon_caught = new Discord.MessageEmbed();
      var Pokedex = require('pokedex-promise-v2');
      var P = new Pokedex();
      var random_poke = Math.floor(Math.random() * 248);
      
      P.getPokemonByName(`${random_poke}`)
        .then(function(response) {
        var img = response.sprites.front_default
        console.log(img);
        pokemon_caught.setImage(img)
          .setTitle("Pokemon caught")
          .setFooter("Congrats");
        msg.reply(pokemon_caught);
                         
        
      })
        .catch(function(error) {
        console.log('There was an ERROR: ', error);
      });
       
        
    }
}