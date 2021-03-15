module.exports = {
	name: 'activity',
	description: 'Sets the activity of the bot.',
	usage: '<activity>',
    permission: 'OWNER',
	execute(message, args) {
	    if (!args[0]) {
	        message.reply('the args were empty')
	    } else {
	        message.reply('the args werent empty')
	    }
	},
};
