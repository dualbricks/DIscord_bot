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

        const fs = require("fs"); //importing file save
        var xpPath = "./data-pokemon.json";
        var xpRead = fs.readFileSync(xpPath);
        var xpFile = JSON.parse(xpRead); //ready for use
        var userId = msg.author.id; //user id here
        var userData = xpFile[userId];

        function sum(obj) {
          var total = 0;
          for (var el in obj) {
            if (obj.hasOwnProperty(el)) {
              total += parseFloat(obj[el]);
            }
          }
        }

        if (sum(userData.balls) == 0) {
          msg.reply("You dont have enough balls! Use !balls to get some~");
          return;
        }

        Object.size = function(obj) {
          var size = 0,
            key;
          for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
          }
          return size;
        };

        var size_balls = Object.size(userData.balls);
        var random_ball = Math.floor(Math.random() * size_balls - 1);
        userData.balls[random_ball]--;
        var ball_name = Object.keys(userData.balls)[random_ball];
        if (!userData.pokemons_caught) {
          //this checks if data for the user has already been created
          userData = {
            pokemons_caught: [name],
            img_pokemon: [img],
            total_number: 1
          };
          fs.writeFileSync(xpPath, JSON.stringify(xpFile, null, 2));
          console.log("whyyy");
        } else {
          console.log(userData.total_number);
          userData.total_number++;
          userData.pokemons_caught.push(name);
          userData.img_pokemon.push(img);
          fs.writeFileSync(xpPath, JSON.stringify(xpFile, null, 2));
          console.log("success");
        }
        pokemon_caught
          .setImage(img)
          .setTitle("Pokemon caught")
          .setFooter(`congrats you have caught ${name} using ${ball_name}`);
        msg.reply(pokemon_caught);
      })
      .catch(function(error) {
        console.log("There was an ERROR: ", error);
      });
  }
};
