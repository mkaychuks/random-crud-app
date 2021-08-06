const express = require('express');
const mongoose = require('mongoose');
const quizRouter = require('./routes/quizRoutes');
require('dotenv/config');
const app = express();

app.use(express.json());
app.use('/', quizRouter);

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
