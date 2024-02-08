'use strict'

require('dotenv').config()
const app = require('./src/config/app')
const sequelize = require('./src/config/data')

sequelize.authenticate()
.then(() => {
    console.log('connection to the database successful!');
    const server = app.initServer();
    console.log(`Server is running on http://localhost:${server.address().port}`);
})
.catch((error)=> {
    console.error('Could not connect to the database', error);
    process.exit(1);
});
