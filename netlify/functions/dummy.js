const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('This is dummy route');
});

router.get('/student', function (req, res, next) {
  res.send('Harry Potter !');
});

router.get('/students', function (req, res, next) {
  res.json([
    {
      name: 'Harry Potter',
      house: 'Gryffindor',
    },
    {
      name: 'Hermione Granger',
      house: 'Gryffindor',
    },
    {
      name: 'Ron Weasley',
      house: 'Gryffindor',
    },
    {
      name: 'Neville Longbottom',
      house: 'Gryffindor',
    },
    {
      name: 'Luna Lovegood',
      house: 'Ravenclaw',
    },
  ]);
});

app.use('/.netlify/functions/dummy', router);

module.exports.handler = serverless(app);
