const Discord = require("discord.js")


exports.run = (client, msg, args) => {

    
        const Status = new Discord.MessageEmbed()
          .setTitle('Current status')
          .addField('Version', `${version}`)
          .addField('Activity status', `${Activitystat}`)
          .addField('Server Stats', `${ServerStat}`)
	  .addField('Server Name', 'Collapi')
          .setColor('#BD1313')
	  .setTimestamp()
        msg.channel.send(Status);

    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}


var version = 'v.1.0.8'
var Activitystat = 'No Recent changes'
var ServerStat = 'Online'