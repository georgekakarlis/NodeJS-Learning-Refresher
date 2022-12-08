//general note : always travelling top-to-bottom and the middlewares always work like that
const http = require('http')
const express = require('express')

const app = express(); //app does a lot in the background. check with command + click for the source code written in defintion typescript (*.d.ts)

app.use((req, res, next) => {
    console.log('midleware')
    next(); // allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('midleware2')
    res.send('<h1>hello froms express</h1>'); //res.send() and send in general also .send() sets headers in html automatically
})

const server = http.createServer(app)

server.listen(3000)