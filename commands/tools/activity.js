module.exports = {
	name: 'activity',
	description: 'Sets the activity of the bot.',
	usage: '<activity>',
    permission: 'OWNER',
	execute(message, args) {
	    if (args[0]) {
	        message.client.user.setActivity(`${args.join(" ")}`);
	        message.reply(`I have set my activity to ${args.join(" ")}`);
	    } else {
	        message.reply(`could not set my activity to nothing.`);
	    }
	},
};
