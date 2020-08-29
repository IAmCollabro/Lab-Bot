const Discord = require("discord.js")

exports.run = (client, msg, args) => {

        msg.channel.send(':game_die: rolling a dice :game_die:');
        var die_faces = ["1", '2', '3', '4', '5', '6']
        var dice = die_faces[Math.floor(Math.random() * die_faces.length)];
  
        const DiceEmbed = new Discord.MessageEmbed()
          .setTitle('Roll')
          .addField('Player Name', msg.author.username)
          .addField('Your Number', `${dice}`)
          .setColor('#BD1313')
  
        msg.channel.send(DiceEmbed)
  
  
        console.log('rolled the dice')

}


module.exports.config = {
    name: "roll",
    description: "rolls a dice",
    useage:"?roll",
    accessability:"members",
    aliases:[]
}