const Discord = require("discord.js")

exports.run = (client, msg, args) => {

    
      if (msg.member.roles.cache.find(r => ["Bot manage"].includes(r.name))) {
        if (!args[1]) return msg.reply('Specify how many messages you want deleted')
        msg.channel.bulkDelete(args[1]);
        msg.channel.send("messages cleared")
        console.log('chat was cleared')


      } else {
        msg.channel.send(`You do not have permission to use this command`)
      }
console.log(args)
}


module.exports.config = {
    name: "",
    description: "",
    useage:"",
    accessability:"",
    aliases:[]
}