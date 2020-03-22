const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require("./models/book");

require('dotenv').config()

const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/books', (req, res) => {
    Book.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })

  app.get('*', (req, res) => {
    return handle(req,res);
  })

  app.listen(process.env.PORT, err => {
    if (err) throw err;
    console.log(`listening on port ${process.env.PORT}`);
  })
})