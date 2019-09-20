//import express and other dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

//import route
const gameRoute = require('./routes/gameRoute');

//define server
server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());


//setup routes
server.use('/api/games', gameRoute);


//test if running
server.get('/', (req, res) => {
  res.status(200).send( 'We are good to go!' );
})

//export
module.exports = server;