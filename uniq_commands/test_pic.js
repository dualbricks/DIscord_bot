module.exports = {
    name: 'test_pic',
    description: 'Checks if ur IC is legit',
    execute(msg) {
      var num = msg.content.toUpperCase().split('/ +/')[1]
      const Discord = require('discord.js');
       const pics = require('fs');
       var link = pics.readFileSync("./links1.txt","utf-8").split("\n");
        if(msg.author.id == "325657843997081600") {
            link = pics.readFileSync("./links2.txt","utf-8").split("\n")
        };
       var winner = msg.author
        const pokewin1 = new Discord.RichEmbed()
        .setColor(0xffa5f1)
        .setAuthor(`Win Already ${winner.username}!!!`, winner.displayAvatarURL)
        .setFooter(`Nice luck! ${winner.username}`, winner.displayAvatarURL)
        .setImage(`${link[`${num}`]}`)
        .addField(`Good Catch!!!`, `${winner.username}`)
        msg.channel.send({embed : pokewin1});
    }
}