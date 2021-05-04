module.exports = {
    name: 'p.pokemon',
    description: 'pokemon bot',
    usage: 'pokemon!',
    execute(msg) {
      var Pokedex = require('pokedex-promise-v2');
      var P = new Pokedex();
      var random_poke = Math.floor(Math.random() * 248);
      
      P.getPokemonByName('${random_poke}')
        .then(function(response) {
        console.log(response.sprites.front_default);
      })
        .catch(function(error) {
        console.log('There was an ERROR: ', error);
      });
        
      
        
    }
}