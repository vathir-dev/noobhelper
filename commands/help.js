const Discord = require('discord.js');
const { prefix, colors} = require('./../utils/config.json');
const embedColor = colors.default;

module.exports = {
	name: '!',
	description: 'Get help on how to use the bot and the specific commands',
	aliases: ['?', 'h'],
	guildOnly: false,
	args: false,
	usage: '[command name]',
	execute: async (message, args, client) => {
		const { commands } = message.client;

		if (!args.length) {
			const cmdHelpEmbed = new Discord.MessageEmbed()
				.setTitle('**HELP**')
				.setDescription(
					`Command list: \n\`${commands
						.map((command) => command.name)
						.join(
							' | ',
						)}\`\n\nYou can use \`${prefix}help {command name}\` to get info about a specific command!`,
				)
        .setFooter("Im Created By JosukeGiovanna#2009")
				.setColor(embedColor);
			return message.channel.send(cmdHelpEmbed);
		}

		const name = args[0].toLowerCase();
		const command =
				commands.get(name) ||
				commands.find((cmd) => cmd.aliases && cmd.aliases.includes(name));

		if (!command) {
			return message.reply('This command does not exist!');
		}
		const cmdHelpEmbed = new Discord.MessageEmbed()
			.setTitle(`${command.name} | Command info`)
			.setDescription(command.description)
			.addField(
				'Usage',
				`\`${prefix + command.name} ${command.usage}\``,
				true,
			)
			.setColor(embedColor);

		if (command.aliases) {
			cmdHelpEmbed.addField(
				'Aliases',
				`\`${command.aliases.join(' | ')}\``,
				true,
			);
		}

		return message.channel.send(cmdHelpEmbed);

	},
};