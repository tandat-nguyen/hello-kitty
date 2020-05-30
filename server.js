
const http = require('http');
const express = require('express');
const fs = require('fs');
const Database = require('./database');

Database.init();

const expressApp = express();

expressApp.get('/:id?', (req, res) => {
  console.log(req.params);
  const index = fs.readFileSync('index.html');
  res.send(index.toString());
})

const server = http.createServer(expressApp);

server.listen(1234);