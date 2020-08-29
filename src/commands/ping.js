const Discord = require("discord.js")

exports.run = (client, msg, args) => {

  msg.channel.send("Pong!")
    console.log('ping was used')

    
}


module.exports.config = {
    name: "ping",
    description: "basic ping test",
    useage:"?ping",
    accessability:"members",
    aliases:[ ]
}