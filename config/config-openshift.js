/* OPENSHIFT ENVIRONMENT VARIABLES */

var env = process.env;

var config = {};

// HOST VARIABLES
config.HOST_IP = env.NODE_IP;
config.HOST_PORT = env.NODE_PORT;

module.exports = config;
