module.exports = {
  name: "!collect",
  description: "collect",
  usage: " collect",
  execute(msg) {
    const filter = m => m.content.startWith('$');
    const collector = msg.channel.createMessageCollector(filter);
    
    collector.on('collect', m => {
      console.log(m.content);
      channel.send("collect")
    })
    
  }
};
