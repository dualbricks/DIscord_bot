module.exports = {
    name: 'collect',
    description: 'collect',
    usage:' collect',
    execute(msg) {
      const Discord = require("discord.js");
      var playerName = "";
      let filter = x => !msg.author.bot && !msg.content.startsWith('!');
      let collector = new Discord.MessageCollector(msg.channel, filter);
      msg.channel.send("Bot is collecting now");
      collector.on('collect', msg => {
        
      });
      
    }
}