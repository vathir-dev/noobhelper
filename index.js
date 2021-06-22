const express = require("express")
const app = express()
app.get("/", (req, res) => {
res.send("hewo")
})
app.listen(3000, () => {
console.log("website is on")
})


const canvacord = require("canvacord")
const fs = require('fs');
const fetch = require('node-fetch')

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
let db = require('quick.db')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.on("message", message => {
  if(db.has(message.author.id + '--afk')){
 message.channel.send(`Welcome back ${message.author}`)
 db.delete(message.author.id + '--afk')
 db.delete(message.author.id + '--messageafk')
 }
 if (message.content.startsWith('--afk')) {
 message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
 // then here you use the database :
 db.set(message.author.id + '--afk','true')
 db.set(message.author.id + '--messageafk', message.content.split(' ').slice(2))
 }
 if (message.content.includes('--afk off')) {
 db.delete(message.author.id + '--afk')
 db.delete(message.author.id + '--messageafk')
 }
 // If one of the mentions is the user
 message.mentions.users.forEach(user =>{
 if (message.author.bot) return false;

 if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
 if(db.has(user.id + '--afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK.. Leave a message if urgent by DMing him`)
 })
})
 

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handler/eventHandler.js');
	eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handler/commandHandler.js');
	commandHandler(err, files, client);
});

client.on("messageReactionAdd", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

client.on("guildMemberAdd", member => {
 member.roles.add("844841654615670797")
})

client.on("messageReactionRemove", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

function ReactionEmojiGrab(reactionArg){
  const contents = reactionArg.substring(1, reactionArg.length - 1).split(":");
  if(contents.length > 1){
    return contents[2];
  }else{
    return reactionArg;
  }
}

setInterval(async () => {
  await fetch('https://NoobHelper.josukedev.repl.co').then(console.log('Pinged'))
}, 24000)
client.login(process.env.TOKEN);