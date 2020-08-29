const Discord = require("discord.js")

exports.run = (client, msg, args) => {

        msg.channel.send('Spinning the chamber')
        msg.channel.send('Closing chamber')
        msg.channel.send('Pulling the trigger')
        var die_faces = ["**Clicks!** you are safe. ", '**Clicks!** you are safe.', '**Clicks!** you are safe.', '**Clicks!** you are safe.', '**Fires!**', '**Clicks!** you are safe.']
        var RR = die_faces[Math.floor(Math.random() * die_faces.length)];
        msg.channel.send(`The revolver ${RR} :gun:`)
        console.log('russian roulette just happened')

    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}