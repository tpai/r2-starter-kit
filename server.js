require('dotenv').config();

const fallback = require('express-history-api-fallback');
const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 8080;

// API
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users/:name/repos', (req, res) => {
  const { name = 'tpai' } = req.params;
  const { _page = 1, _limit = 10 } = req.query;
  fetch(`https://api.github.com/search/repositories?q=user:${name}&sort=stars&order=desc&page=${_page}&per_page=${_limit}`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`
    }
  })
    .then(res => res.json())
    .then(json => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('x-total-count', json.total_count);
      res.send(JSON.stringify(json.items));
    });
});

app.use('/api/users/:name', (req, res) => {
  const { name = 'tpai' } = req.params;
  fetch(`https://api.github.com/users/${name}`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`
    }
  })
    .then(res => res.json())
    .then(json => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(json));
    });
});

// SPA
const root = path.resolve(__dirname, './dist');
const assets = path.resolve(__dirname, './dist/static');

app.use('/static', express.static(assets));
app.use(fallback('index.html', { root }));

http.listen(port, function() {
  console.log("Listening http://localhost:" + port);
});
