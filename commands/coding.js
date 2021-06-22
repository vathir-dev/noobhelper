const Discord = require('discord.js')

module.exports = {
	name: 'code',
	description: 'ask about coding',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		 let embed = new Discord.MessageEmbed()
     .setTitle("Code?")
     .setDescription("Code In This Server Ok?, https://discord.gg/rbMyjyG2gM")
     .setColor("RANDOM")
     .setFooter("Thanks")
     message.channel.send(embed)
     
	},
};