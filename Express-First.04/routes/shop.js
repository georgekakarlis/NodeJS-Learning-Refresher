const express = require('express')

const router = express.Router();

app.get('/', (req, res, next) => {
    console.log('midleware2')
    res.send('<h1>hello froms express</h1>'); //res.send() and send in general also .send() sets headers in html automatically
})

module.exports = router;