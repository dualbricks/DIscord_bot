module.exports = {
  name: 'num_of_pics',
  description: 'Number of pics in your Red velvet collection hehe',
  Usage: 'How many pics do i have?',
  execute(msg) {
    const fs = require('fs')
    var user = msg.author
    if(user.id =='315430130056953861'){
      var fileBuffer =  fs.readFileSync('./links1.txt');
      var  to_string = fileBuffer.toString();
      var  lines_num = to_string.split('\n').length;
      msg.reply(`You have ${lines_num} in your collection!\n Use add_pic command to add more !!`)
    }
    else if(user.id == '325657843997081600') {
     var fileBuffer =  fs.readFileSync('./links2.txt');
     var to_string = fileBuffer.toString();
     var lines_num = to_string.split('\n').length;
      msg.reply(`You have ${lines_num} in your collection!\n Use add_pic command to add more !!`)
    }
    else {
      msg.reply("You don't have access to files !!")
    }
  }
};
    
 