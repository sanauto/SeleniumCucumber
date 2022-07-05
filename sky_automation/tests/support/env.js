const {setDefaultTimeout} = require('cucumber');

require('dotenv').config();

setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);