var clients = require('./../../data.js').clients;

module.exports.getId = function(client) {
    return client.id;
};

module.exports.getRedirectUri = function(client) {
    return client.redirectUri;
};

module.exports.fetchById = function(clientId, cb) {
	console.trace("fetchById in memory "+ clientId);
	console.log(clients.length+" clients");
    for (var i in clients) {
		console.log("client id "+clients[i].id);
        if (clientId == clients[i].id) return cb(null, clients[i]);
    }
    cb();
};

module.exports.checkSecret = function(client, secret) {
    return (client.secret == secret);
};