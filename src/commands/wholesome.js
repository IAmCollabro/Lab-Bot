const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["wholesome", "wholesomememes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`Pulled a post from /r/${random}`)
    .setURL(`http://reddit.com/${random}`)
    .setTimestamp()
    .setColor('#BD1313')

    message.channel.send(embed);

}

module.exports.config = {
    name: "meme",
    description: "",
    usage: "?meme",
    accessableby: "Members",
    aliases: []
}