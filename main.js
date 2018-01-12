const config = require('config');
const os = require('os');

console.log('os:' + os.hostname());

console.log("config.test:");
console.log(config.test);

console.log("config.test2:");
console.log(config.test2);