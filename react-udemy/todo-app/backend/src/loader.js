const server = require('../config/server');
require('../config/routes')(server);
require('../config/database');
