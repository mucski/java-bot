const paladinsJS = require('paladins.js');

let api = new paladinsJS.API({
    devId: process.env.DEVID,
    authKey: process.env.AUTHKEY
}); // API loaded and ready to go. 

module.exports = {
    name: 'test',
    execute(message) {
        api.getDataUsage()
        .then((res) => {
            console.log(res)
            const rssponse = JSON.stringify(res)
            message.channel.send(response)
        })
        .catch((err) => {
            // Handle the error
            console.log(err)
        });
    },
};
