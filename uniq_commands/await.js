module.exports = {
  name: "!collect",
  description: "collect",
  usage: " collect",
  execute(msg) {
    const Discord = require("discord.js");
    var playerName = "";
    var running = true;
    var arrayhehe = [];
    while (running) {
      let filter = x => !msg.author.bot && !msg.content.startsWith("!");
      let collector = new Discord.MessageCollector(msg.channel, filter);
      msg.channel.send("Bot is collecting now");
      collector.on("collect", msg => {
        if (msg.content == "!stop") {
          collector.stop();
          running = false;
          return;
        }
      });
      collector.on("end", async (collectedItem, reason) => {
        function isDone() {
          if (playerName != null) {
            return new Promise(resolve => {
              resolve("resolved");
            });
          }
        }
        await isDone();
        console.log(collectedItem.size);
        console.log(playerName + " ended");
        msg.channel.send("Collection has stopped by " + playerName);
        console.log(collectedItem.array()[0].content);
        var contentArray = [];
        for (let i = 0; i < collectedItem.size - 1; i++) {
          arrayhehe.push(collectedItem.array()[i].content);
        }
        console.log(contentArray);
      });
    }
  }
};
