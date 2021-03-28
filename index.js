const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const netApi = require('@misioxd/net-browserify')
const cors = require('cors')

app.use(netApi({ allowOrigin: '*' }))
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204
}))

app.get('/', function (req, res) {
  res.send('Web-minecraft proxy server')
})

app.listen(port, function () {
  return console.log(`Server is running on \x1b[34m*:${port}\x1b[0m`)
})
