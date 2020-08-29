const Discord = require("discord.js")

exports.run = (client, msg, args) => {

      msg.channel.send('Page 2!');
      const Help = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField('?shots', 'Do shots with freinds')
        .addField('?meme', 'Get a random meme')
        .addField('?anime', 'Get a random anime image')
        .addField('?wholesome', 'get a random wholesome image')
        .addField('?cursed', 'Get a random cursed image')
        .addField('?info_status', 'Basic bot info')
        .addField('?help3', 'Page 3')
        .setColor('#1AC60B')

      msg.channel.send(Help)
      console.log('Help given')

    
}
