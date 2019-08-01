const server = require('./api/server.js')
require('dotenv').config()

const port = process.env.PORT ? process.env.PORT : 4000

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})