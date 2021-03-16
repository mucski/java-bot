module.exports = {
    name: 'kick',
    description: 'Kick a member',
    usage: '<member>',
    permissions: ['KICK_MEMBERS'],
    execute(message, args) {
        if(args[0]) {
            const member = message.mentions.members.first();
            member.kick();
            message.reply(`kicked member ${member}`);
        } else {
            message.channel.send("You need to mention someone first.");
        }
    },
};
