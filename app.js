const app = require('express')();

const colors = require('colors');

require('dotenv').config();

global.configs = require('./config');

/* mongodb connection */
require('./database/mongodb');

/* redis connection */
// require('./database/redis');

/*  tools middleware  */
// require('./modules/tools')(app);

/* mainRouter layer */
// const mainRouter = ;
// app.use('/', require('./routes/mainRouter'));


app.listen(configs.appConfigs.port, configs.appConfigs.host, () => {
    console.log(`app is running on port:${configs.appConfigs.port}, host:${configs.appConfigs.host}`.bgGreen.bold);
});