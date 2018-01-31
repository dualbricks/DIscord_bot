module.exports = {
    name: 'add_pic',
    description: 'check lol',
    execute(msg) {
      const fs = require('fs');
      var link = msg.split(' ')[1]
      if(msg.author.id =='315430130056953861'){
        fs.appendFileSync('links1.txt', `${link}`, encoding='utf8');
       }
      else if(msg.author.id == '325657843997081600'){
        fs.appendFileSync('links2.txt', `${link}`, encoding='utf8');
    }
  }
}