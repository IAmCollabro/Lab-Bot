const Discord = require("discord.js")

exports.run = (client, msg, args) => {


var die_faces = ["yes", 'no', 'maybe', 'i cant tell you that', 'who do you think i am?', 'Deffinitely', 'oh you sure are']
var ball = die_faces[Math.floor(Math.random() * die_faces.length)];
msg.channel.send(`:8ball: ${ball} :8ball:`)
console.log('8ball was used')


    
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}