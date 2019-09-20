require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 4500;

server.listen(PORT, () => {
  console.log(`\n as we begin our journey through ${PORT} \n`)
})