const Discord = require('discord.js')

module.exports = {
	name: 'Avatar',
	description: 'See Avatar',
	aliases: ["avatar", "ava", "av", "AVATAR"],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		 let embed = new Discord.MessageEmbed()
     .setTitle("YOUR AVATAR!")
     .setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
     .setColor("PURPLE")
     .setFooter(`${message.author.username}`)
     message.channel.send(embed)
	},
};