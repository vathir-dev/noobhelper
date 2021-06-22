const Discord = require('discord.js')


module.exports = {
	name: 'ping',
	description: 'PINGING',
	aliases: ['p'],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
     let embed = new Discord.MessageEmbed()
     .setTitle("🏓 Pong!")
     .setDescription(`**${client.ws.ping}ms** Latency!`)
     .setColor("RANDOM")
     .setFooter(
       `Requested by ${message.author.username}`,message.author.displayAvatarURL()
       );
     message.channel.send(embed);
  }
}