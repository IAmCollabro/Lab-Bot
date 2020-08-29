const Discord = require("discord.js")

exports.run = (client, msg, args) => {

    msg.channel.send('i sent you a list of subreddits');
    msg.author.send('i will be able to take images from: r/memes, r/dankmemes, r/wholesomememes, r/cursedimages, r/softwaregore, r/choosingbeggars and r/meme');

}