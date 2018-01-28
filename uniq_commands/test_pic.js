module.exports = {
    name: 'test_pic',
    description: 'check lol',
    execute(msg) {
      var num = msg.content.split('/ +/')[1]
     msg.reply(`${num}`)
    }
}