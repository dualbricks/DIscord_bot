module.exports = {
    name: 'p.pokemon',
    description: 'pokemon bot',
    usage: 'pokemon!',
    execute(msg) {
      var Pokedex = require('pokedex-promise-v2');
      var P = new Pokedex;
      var random_poke = Math.floor(Math.random() * 248);
      
      P.getPokemonById(random_poke).then()
        
      
        
    }
}