const discord = require("discord.js")

module.exports.run = async(client, message, args) => {

    var die_faces = ["8=D", '8==D', '8===D', '8====D', '8=====D', '8======D', '8=======D']
var ball = die_faces[Math.floor(Math.random() * die_faces.length)];
const PP = new discord.MessageEmbed()
.setTitle ('Your PP size')
.addField (`Your size is`, `${ball}`)
PP.setTimestamp(Date.now());
PP.setFooter("Not To Scale");
message.channel.send(PP)
console.log('i guessed ppsize')
console.log(ball)


    
}
