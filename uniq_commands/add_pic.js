module.exports = {
    name: 'add_pic',
    description: 'check lol',
    execute(msg) {
      const fs = require('fs');
      var link = msg.content.split(' ')[1]
      if(msg.author.id =='315430130056953861'){
        fs.appendFileSync('links1.txt',link,'utf8');
        console.log("Data is appended to file successfully.")
        msg.reply(`Your pic has been added to ${msg.author.username}'s collections`)
        msg.delete('2000')
       }
      else if(msg.author.id == '325657843997081600'){
        fs.appendFileSync('links2.txt',link, 'utf8');
        msg.reply(`Your pic has been added to ${msg.author.username}'s collections`)
        msg.delete('2000')
    }
      else{
        msg.reply('You are not allowed to add new pic!!');
      }
  }
}