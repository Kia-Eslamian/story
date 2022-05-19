const redis = require('redis');

const client = redis.createClient({
    port: configs.dbConfigs.redis.port,
    host: configs.dbConfigs.redis.host,
});

client.on('connect', () => {
    console.log('client connected to redis on port:6379, host: 127.0.0.1'.bgGreen);
});

client.on('ready', () => {
    console.log('client connected to redis and ready to use...'.bgGreen);
});

client.on('error', (error) => {
    console.log(error.message.bgRed);
});

client.on('disconnect', () => {
    console.log('client disconnect from redis'.bgYellow);
});

process.on('SIGINT', () => {
    client.quit();
});

client.connect();

module.exports = client;