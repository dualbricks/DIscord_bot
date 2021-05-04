module.exports = {
    name: 'p.pokemon',
    description: 'pokemon bot',
    usage: 'pokemon!',
    execute(msg) {

      var random_poke = Math.floor(Math.random() * 248);
      
      P.getPokemonByName(`${random_poke}`)
        .then(function(response,body) {
        var data = body;
        console.log(data.sprites.front_default);
      })
        .catch(function(error) {
        console.log('There was an ERROR: ', error);
      });
        
      
        
    }
}