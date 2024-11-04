require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

// Set up the server
const server = http.createServer(app);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});