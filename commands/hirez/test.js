const api = paladinsJS.API();

module.exports = {
    name: 'test',
    execute(message) {
        api.getDataUsage()
        .then((res) => {
            console.log(res)
            const response = JSON.stringify(res)
            message.channel.send(response)
        })
        .catch((err) => {
            // Handle the error
            console.log(err)
        });
    },
};
