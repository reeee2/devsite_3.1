// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/images', (req, res) => {
  fs.readdir('./image', (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.json(files);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});