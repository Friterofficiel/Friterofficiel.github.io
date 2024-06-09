const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Middleware pour ajouter les en-têtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

app.use('/.netlify/functions/users', router);

module.exports.handler = serverless(app);
