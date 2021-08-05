const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log('Server listening on port 5000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
