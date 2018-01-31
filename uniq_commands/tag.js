module.exports = {
  name : 'tag',
  description : 'tag guy and say stuff',
  usage : 'tag @user your message',
  execute(msg) {
    var user = msg.mentions.users.first()
    if(msg.mentions.users.size == 0) {
      user = msg.author
    };
    var prefix = msg.content.split(' ')[0] + msg.content.split(' ')[1]
    var content = msg.content.slice(prefix.length + 2)
    msg.channel.send(`${user} ${content}`)
    msg.delete('3000')
  }
};
  
  