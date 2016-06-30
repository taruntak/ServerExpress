/* OPENSHIFT ENVIRONMENT VARIABLES */

var env = process.env;

var config = {};

// HOST VARIABLES
config.HOST_IP = env.NODE_IP;
config.HOST_PORT = env.NODE_PORT;

// MONGODB VARIABLES
config.DB_HOST = env.OPENSHIFT_MONGODB_DB_HOST;
config.DB_PORT = env.OPENSHIFT_MONGODB_DB_PORT;
config.DB_USERNAME = env.OPENSHIFT_MONGODB_DB_USERNAME;
config.DB_PASSWORD = env.OPENSHIFT_MONGODB_DB_PASSWORD;
config.DB_URL = env.OPENSHIFT_MONGODB_DB_URL;

module.exports = config;