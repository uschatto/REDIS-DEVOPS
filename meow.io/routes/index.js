var express = require('express');
var router = express.Router();
// REDIS
const redis = require('redis');
let client = redis.createClient(6379, '127.0.0.1', {});


const db = require('../data/db');
let img_list = []
/* GET home page. */
router.get('/', async function(req, res, next) {
  client.lrange("recentuploads", 0, 4, function(err, reply) {
        img_list = reply;	
  });
  client.get("bestfacts", async function(err, reply) {
        if(reply){
		res.render('index', { title: 'meow.io', recentUploads: img_list, bestFacts: JSON.parse(reply) });
	}
	else{
		var dbData = (await db.votes()).slice(0,100);
                client.setex("bestfacts", 10, JSON.stringify(dbData));
		res.render('index', { title: 'meow.io', recentUploads: img_list, bestFacts: dbData });
	}
  });
});

module.exports = router;
