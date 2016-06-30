/* OPENSHIFT ENVIRONMENT VARIABLES */

var env = process.env;

var config = {};

// HOST VARIABLES
config.HOST_IP = env.OPENSHIFT_NODEJS_IP;
config.HOST_PORT = env.OPENSHIFT_NODEJS_PORT;

module.exports = config;
