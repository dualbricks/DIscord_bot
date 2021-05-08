module.exports = {
  name: "!collect",
  description: "collect",
  usage: " collect",
  execute(msg) {
    const filter = m => m.content.startsWith('$');
    const collector = msg.channel.createMessageCollector(filter, {time: 1000000});
    
    collector.on('collect', m => {
      console.log(m.content);
      msg.channel.send("collected")
    });
    
    collector.on('end', collecteditems => {
      console.log(collecteditems.size);
    });
  }
};
