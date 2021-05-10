module.exports = {
  name: "balls",
  description: "give you balls",
  usage: "!balls",
  execute(msg) {
    var Pokedex = require("pokedex-promise-v2");
    var P = new Pokedex();
    P.getPokemonByName()
      .then(function(response) {}).catch(function(error) {
      console.log('An error has occurred');
    })
    
  }
};
