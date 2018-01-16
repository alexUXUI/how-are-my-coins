var express = require('express');
var router = express.Router();
var db = require('../hamc-db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db('users').select().then(function(users){
    db('altfolios').select().then(function(altfolios){
      res.json({
        users,
        altfolios,
      })
    });
  });
});

module.exports = router;
