const Discord = require("discord.js")

exports.run = (client, msg, args) => {

      msg.channel.send('Page 1!');
      const Help = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField('?kick', 'Currently disabled')
        .addField('?ban', 'Currently disabled')
        .addField('?clear', 'Clear a certain number of messages')
        .addField('?roll', 'Roll a 6 sided dice')
        .addField('?rr', 'Play a game of russian roulette')
        .addField('?player', 'Basic info about a player')
        .addField('?help2', 'Page 2')
        .setColor('#1AC60B')

      msg.channel.send(Help)
      console.log('Help given')

    
}
