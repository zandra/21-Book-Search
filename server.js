const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require("./models/book");

require('dotenv').config()

const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  });


nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/app', (req, res) => {
    Book.find({})
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  })

  // Hand all route requests to Next via a handle
  app.get('*', (req, res) => {
    return handle(req,res);
  })

  app.set('port', process.env.PORT || 3000);

  const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
})