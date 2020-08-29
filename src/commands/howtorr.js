const Discord = require("discord.js")

exports.run = (client, msg, args) => {

    const rr = new Discord.MessageEmbed()
      .setTitle('Russian Roulette')
      .addField('What it is', 'Russian roulette is a russian game of chance where a bullet is randomly loaded into a revolver and shot at individuals')
      .addField('How to play', 'this game can be played solo or with a group of players. doing ?rr will pull the trigger. last one to get shot wins')
      .setColor('#BD1313')

    msg.channel.send(rr);

    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}