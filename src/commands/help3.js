const Discord = require("discord.js")

exports.run = (client, msg, args) => {

      msg.channel.send('Page 3!');
      const Help = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField('?info_changelog', 'Recent bot changes')
        .addField('?info_support', 'Support server invite')
        .addField('?howto8ball', 'how to use the 8ball command')
        .addField('?howtoroll', 'how to use the roll command')
        .addField('?howtorr', 'how to use the russian roulette command')
        .addField('?howtoshots', 'how to use the shots command')
        .addField('?reload', 'Reload a command')
        .setColor('#1AC60B')

      msg.channel.send(Help)
      console.log('Help given')

    
}
