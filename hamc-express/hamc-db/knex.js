/**
 * We export our configured DB so that we can
 * import this is a route file. 
 * 
 * example: var db = require('../db/knex');
 */

var environment = 'development';
var config = require('./knexfile.js')[environment];
module.exports = require('knex')(config);