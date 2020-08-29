const Discord = require("discord.js")

exports.run = (client, msg, args) => {


        const ballin = new Discord.MessageEmbed()
          .setTitle('magic 8 ball')
          .addField('What it is', 'a common household toy that is ment to awnser lifes questions')
          .addField('How to play', 'this is a one player minigame all you need to do is use ?magic8ball and ask it your question')
          .setColor('#BD1313')
  
        msg.channel.send(ballin);


}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}