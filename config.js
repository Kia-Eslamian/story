const appConfigs = {
    name: process.env.APP_NAME,
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
};

const dbConfigs = {
    mongodb: {
        db: process.env.DB_MONGODB,
        name: process.env.DB_MONGODB_NAME,
        port: process.env.DB_MONGODB_PORT,
        host: process.env.DB_MONGODB_HOST,
        url: `${process.env.DB_MONGODB}://${process.env.DB_MONGODB_HOST}:${process.env.DB_MONGODB_PORT}/${process.env.DB_MONGODB_NAME}`
    },
    redis: {
        db: process.env.DB_REDIS,
        port: process.env.DB_REDIS_PORT,
        host: process.env.DB_REDIS_HOST,
    },
};


module.exports = {
    appConfigs, dbConfigs
};