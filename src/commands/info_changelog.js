const Discord = require("discord.js")

exports.run = (client, msg, args) => {

    const changelog = new Discord.MessageEmbed()
      .setTitle('Changelog')
      .addField('1.', `${change1}`)
      .addField('2.', `${change2}`)
      .addField('3.', `${change3}`)
      .addField('4', `${change4}`)
      .addField('5', `${change5}`)
      .setColor('#BD1313')
    msg.channel.send(changelog);

    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}

var change1 = 'added meme command (?meme)'
var change2 = 'added anime command (?anime)'
var change3 = 'added wholesome command (?wholesome)'
var change4 = 'Added cursed image command (?cursedimage)'
var change5 = 'changed help command to pages'