module.exports = {
  name: "balls",
  description: "give you balls",
  usage: "!balls",
  execute(msg) {
    var Pokedex = require("pokedex-promise-v2");
    var P = new Pokedex();
    P.getPokemonByName(`${random_poke}`)
      .then(function(response) {}).catch(function(error) {
      console.
    })
    
  }
};
