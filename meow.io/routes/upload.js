const multer = require('multer');
const fs = require('fs');

const db = require('../data/db');
const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1', {});

var express = require('express');
var router = express.Router();

/* GET users listing. */
const upload = multer({ dest: './uploads/' })

router.post('/', upload.single('image'), function (req, res) {
  console.log(req.body) // form fields
  console.log(req.file) // form files

  if (req.file.fieldname === 'image') {
    fs.readFile(req.file.path, async function (err, data) {
      if (err) throw err;
      var img = new Buffer(data).toString('base64');

      //TASK4 : STACK (LIFO) structure to be used to recent uploads 
      client.lpush("recentuploads",img);
      client.ltrim("recentuploads", 0, 4);

      //TASK5 : QUEUE (FIFO) structure to be used for storage
      client.rpush("storage",img);

      res.send('Ok');

    });
  }
});

module.exports = router;
