const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

app.use('/.netlify/functions/users', router);

module.exports.handler = serverless(app);
