'use strict';

require('dotenv').config();

const server = require('./src/server')
const {database} = require('./src/models/index')
database.sync().then(()=>{
    server.start(process.env.PORT || 3001)
}).catch(console.error)