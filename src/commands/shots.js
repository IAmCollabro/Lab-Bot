const Discord = require("discord.js")

exports.run = (client, msg, args) => {

    msg.channel.send('Opening a bottle of vodka')
    var die_faces = ["1", '2', '3', '4', '5', '6']
    var face = die_faces[Math.floor(Math.random() * die_faces.length)];
    msg.channel.send(`pouring **${face}** shot/s :wine_glass:`)
    var die_faces = ["You remain sober. Are you russian?? :flag_ru: ", 'you passed out. weak :tired_face:']
    var Sober = die_faces[Math.floor(Math.random() * die_faces.length)];
    msg.channel.send(`${Sober}`)
    console.log('someone did shots')

    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}