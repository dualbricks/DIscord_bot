module.exports = {
  name: 'Help',
  description : 'Help',
  usage : 'i want help',
  execute(msg) {
    const { uniq_commands } = msg.client;
    const data = [];
    var names = (uniq_commands.map(command => command.name));
    for(var i = 0; i < names.length; i++) {
    var command = uniq_commands.get(names[`${i}`])
    msg.channel.send(`**Name:** ${command.name}`)
    if (command.description) {
      msg.channel.send(`**Description:** ${command.description}`);
    }
    if(command.aliases) {
      msg.channel.send(`**Aliases:** ${command.aliases.join(', ')}`);
    }
    if(command.usage) {
      msg.channel.send(`**Usage:** ${command.usage}\n-----------------------------------------------`);
    }
  }
}
}