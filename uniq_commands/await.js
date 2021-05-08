module.exports = {
  name: "!collect",
  description: "collect",
  usage: " collect",
  execute(msg) {
    var playerName = "";
    var running = true;
    var arrayhehe = [];
    let filter = x => !msg.author.bot && msg.content.startsWith("$");
    const collector = msg.channel.createMessageCollector(filter);
    function comeOn() {
      msg.channel.send("Bot is collecting now");
      collector.on("collect", msg => {
        console.log(msg.content + "collected");
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
    
    comeOn();
    
    
    
  }
};
