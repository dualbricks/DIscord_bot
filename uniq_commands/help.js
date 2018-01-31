module.exports = {
  name: 'Help',
  description : 'Help',
  usage : 'i want help',
  execute(msg) {
    const { commands } = message.client;
    const data = []
    var names = (commands.map(command => command.name).split(',');
    for(i = 0, i < names.length, i++) {
      command = commands.get(`names[i]
    msg.channel.send(`**Name:** ${command.name}`)

if (command.description) data.push(`**Description:** ${command.description}`);
if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

    