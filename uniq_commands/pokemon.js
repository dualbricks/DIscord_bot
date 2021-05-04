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
        var name = response.name;
        var img = response.sprites.front_default
        console.log(img);
        pokemon_caught.setImage(img)
          .setTitle("Pokemon caught")
          .setFooter(`congrats you have caught ${name}`);
        msg.reply(pokemon_caught);
        const fs = require('fs') //importing file save
        var xpPath = './data-pokemon.json'
        var xpRead = fs.readFileSync(xpPath);
        var xpFile = JSON.parse(xpRead); //ready for use
        var userId = msg.author.id //user id here
        
        if (!xpFile[userId]) { //this checks if data for the user has already been created
        xpFile[userId] = {pokemons_caught:{} , img_pokemon: {}, total_number: 0}; 
        fs.writeFileSync(xpPath, JSON.stringify(xpFile, null, 2));
        }  
        
        else {
              var number_pokemon = Number(xpFile.total_number) + 1;
              var name_pokemon = xpFile.pokemons_caught.push(name);
              var img_pokemon = xpFile.img_pokemon.push(img);
              xpFile[userId] = {pokemons_caught: name_pokemon, img_pokemon: img_pokemon, total_number: number_pokemon};
              fs.writeFileSync(xpPath, JSON.stringify(xpFile, null, 2));
        }
                         
        
      })
        .catch(function(error) {
        console.log('There was an ERROR: ', error);
      });
       
        
    }
}