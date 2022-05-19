const mongoose = require('mongoose');

mongoose.connect(configs.dbConfigs.mongodb.url)
    .then(connection => console.log(`mongodb url: ${configs.dbConfigs.mongodb.url}`.bgGreen))
    .catch(error => console.log(chalk.green('can not connect to mongodb: '), error));

mongoose.connection.on('connected', () => {
    console.log('mongoose connected'.bgGreen);
});

mongoose.connection.on('error', error => {
    console.log(`mongoose connection failed:  ${error.message}`.bgRed);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected'.bgYellow);
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});