require('dotenv').config();

const fallback = require('express-history-api-fallback');
const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 8080;

// API
const fetch = require('isomorphic-fetch');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users/:name/repos', (req, res) => {
  const { name = 'tpai' } = req.params;
  const { _page = 1, _limit = 10 } = req.query;
  fetch(`https://api.github.com/users/${name}/repos?page=${_page}&per_page=${_limit}`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`
    }
  })
    .then(response => {
      const linkHeader = response.headers.get('Link');
      const links = linkHeader.split(', ');
      const last = links.filter(link => link.includes('last')).join('');
      const matches = last.match(/\?page=(\d{1,})/) || [];
      const matched = matches.slice(-1) || [];
      const lastPage = matched.toString() || 1;
      res.setHeader('x-total-count', lastPage * _limit);
      return response.json();
    })
    .then(json => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(json));
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
