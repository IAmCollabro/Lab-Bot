const Discord = require("discord.js")

exports.run = (client, msg, args) => {

    

    const rickrolled = new Discord.MessageEmbed()
      .setTitle('roll')
      .addField('What it is', 'this will randomly roll a 6 sided dice for you')
      .addField('How to play', 'this can be done with ?roll and you can either try beat someones roll or use it for something else here is a video explaining it https://youtu.be/dQw4w9WgXcQ')
      .setColor('#BD1313')

    msg.channel.send(rickrolled);


}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}