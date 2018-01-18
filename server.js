// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.uniq_commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');
const uniq_commandsFiles = fs.readdirSync('./uniq_commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


for(const file of uniq_commandsFiles) {
    const uniq_command = require(`./uniq_commands/${file}`);
    bot.uniq_commands.set(uniq_command.name, uniq_command)
}


bot.on('message', msg => {
    if (!msg.content.startsWith(process.env.MADE_WITH) && !msg.author.bot) {
       var upcase = msg.content.toLowerCase()
        if(upcase.includes('random_nric')) {
            bot.uniq_commands.get('random_nric').execute(msg);
        }
        else if(upcase.includes('p.pokemon')) {
            bot.uniq_commands.get('p.pokemon').execute(msg);
        }
        else if(upcase.includes('legit') && upcase.includes('is')) {
            bot.uniq_commands.get('legit').execute(msg)
        }
        else if(upcase == "info") {
            msg.send("Running on Heroku created by Wenyue\nNode version: v8.9.3\nnpm: v5.5.1");
        }
    };

    if(msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
    
    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(msg, args);
    }
    catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }

});


bot.on('ready', () => {
    console.log('Welcome my master...');

    bot.user.setActivity("~Your Mum~");
});

bot.login(`${process.env.SECRET}`);

