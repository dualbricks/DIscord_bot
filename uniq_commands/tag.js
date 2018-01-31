module.exports = {
  name : 'tag',
  description : 'tag guy and say stuff',
  execute(msg) {
    var user = msg.mentions.users.first()
    if(msg.mentions.users.size == 0) {
      user = msg.author
    };
    content = msg.content.split
  
  