var express = require('express');
var router = express.Router();
var db = require('../hamc-db/knex');
var request = require("request");

router.use(function(req, res, next) {
  console.log('\n\n\n using middle ware \n\n\n\n')
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  /**
   * make server side request for altcoins from coin market cap
   */

   request.get('https://api.coinmarketcap.com/v1/ticker/', (err, response, body) => {
     if(body) {
      res.json({body})
     } else if (err) {
      res.json({err})
     }
   })
});

module.exports = router;
