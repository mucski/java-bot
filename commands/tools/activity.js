module.exports = {
	name: 'activity',
	description: 'Sets the activity of the bot.',
    permission: 'OWNER',
	execute(message, args) {
        message.client.user.setActivity(`${args.join(" ")}`);
        message.reply(`I have set activity to ${args.join(" ")}`);
	},
};
