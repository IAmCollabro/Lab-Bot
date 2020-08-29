const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
  
fs.readdir(`./src/events/`, (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./src/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('message', msg => {
  if (msg.content === 'UwU') {
    msg.channel.send('https://tenor.com/view/baby-yoda-uwu-the-mandalorian-cute-confused-gif-16018927');
  }

  if (msg.content === 'hello') {
    msg.channel.send('Hey!');
  }

  if (msg.content === 'Bye') {
    msg.channel.send(`Cya have a good night/day`);
  }
});


client.login(config.token);