const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const netApi = require('@misioxd/net-browserify')
const cors = require('cors')

app.use(netApi({ allowOrigin: '*' }))
app.use(cors())
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  return next()
})

app.get('/', function (req, res) {
  res.send('Web-minecraft proxy server')
})

app.listen(port, function () {
  return console.log(`Server is running on \x1b[34m*:${port}\x1b[0m`)
})
