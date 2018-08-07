/* OPENSHIFT ENVIRONMENT VARIABLES */

var env = process.env;

var config = {};

// HOST VARIABLES
config.HOST_IP = env.OPENSHIFT_NODEJS_IP || 3000;
config.HOST_PORT = env.OPENSHIFT_NODEJS_PORT || '127.0.0.1';

module.exports = config;
