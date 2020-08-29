const Discord = require("discord.js")


exports.run = (client, msg, args) => {

    
      const embed = new Discord.MessageEmbed()
        .setTitle('User info')
        .addField('Player Name', msg.author.username)
        .setThumbnail(msg.author.displayAvatarURL())
        .addField('Current Server', msg.guild.name)
        .addField('Player ID', msg.author.id)
        .setColor('#BD1313')
      embed.setTimestamp(Date.now());
      embed.setFooter("created by IAmCollabro.");

      msg.channel.send(embed);
      console.log('player command run')


    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}