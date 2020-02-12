const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', async (req, res, next) => {
    axios.get("http://localhost:5372").then((response) => {
      console.log(response.data);
    });
    res.json("pong");
});

app.listen(4567, (res) => {
  console.log('Listening on port 4567.');
});
