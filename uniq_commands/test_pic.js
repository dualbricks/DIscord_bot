module.exports = {
    name: 'test_pic',
    description: 'check lol',
    execute(msg) {
      var num = msg.content.split(' ')[1]
       const Discord = require('discord.js');
       const pics = require('fs');
       var link = pics.readFileSync("./links1.txt","utf-8").split("\n");
        if(msg.author.id == "325657843997081600") {
            link = pics.readFileSync("./links2.txt","utf-8").split("\n")
        }
       var winner = msg.author
        const pokewin1 = new Discord.RichEmbed()
        .setColor(0xffa5f1)
        .setAuthor(`tesing ${winner.username}!!!`, winner.displayAvatarURL)
        .setFooter(`testing ${winner.username}`, winner.displayAvatarURL)
        .setImage(`${link[`${num}`]}`)
        .addField(`testing`, `${winner.username}`)
        msg.channel.send({embed : pokewin1});
    }
};
