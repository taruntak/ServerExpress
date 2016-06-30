/* OPENSHIFT ENVIRONMENT VARIABLES */

var env = process.env;

var config = {};

// HOST VARIABLES
config.HOST_IP = 'localhost';
config.HOST_PORT = 4000;

// MONGODB VARIABLES
config.DB_HOST = 'localhost';
config.DB_PORT = 27017;
config.DB_URL = 'mongodb://localhost:27017/';

module.exports = config;
