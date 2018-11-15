const express = require('express');
const cors = require('cors');
const path = require('path');

const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'images')));

app.get('/api/projects', (req, res) => {
  fs.readFile('./data.json', function(err, data) {
    res.json(JSON.parse(data.toString()));
  });
});

app.listen(5000, () => {
  console.log('Listening to localhost:5000');
});
