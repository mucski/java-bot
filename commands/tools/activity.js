module.exports = {
	name: 'activity',
	description: 'Sets the activity of the bot.',
	usage: '<activity>',
    permission: 'OWNER',
	execute(message, args) {
	    if (args[0]) {
            message.client.user.setActivity(`${args.join(" ")}`);
            message.reply(`I have set activity to ${args.join(" ")}`);
	    } else {
	        return message.reply('Could not set empty string as activity');
	    }
	},
};
