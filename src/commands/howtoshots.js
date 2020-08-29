const Discord = require("discord.js")

exports.run = (client, msg, args) => {


        const shots = new Discord.MessageEmbed()
          .setTitle('Shots')
          .addField('What it is', 'a bar game to see who is the heaviest drinker')
          .addField('How to play', 'this can be played with two or more players and the aim is to get the highest number of shots taken without passing out')
          .setColor('#BD1313')
  
        msg.channel.send(shots);

    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}