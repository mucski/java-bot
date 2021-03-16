const paladinsJS = require('paladins.js');

let api = new paladinsJS.API({
    devId: '3462',
    authKey: 'B6987E84BC1A4838AD03782720337D74'
}); // API loaded and ready to go. 

module.exports = {
    name: 'test',
    execute(message) {
        api.getDataUsage()
        .then((res) => {
            res.map(data => data);
            console.log(data[0])
        })
        .catch((err) => {
            // Handle the error
            console.log(err)
        });
    },
};
