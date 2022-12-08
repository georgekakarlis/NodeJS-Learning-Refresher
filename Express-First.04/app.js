//general note : always travelling top-to-bottom and the middlewares always work like that

const express = require('express')

const app = express(); //app does a lot in the background. check with command + click for the source code written in defintion typescript (*.d.ts)


//commented out to proceed learning
/* app.use((req, res, next) => {
    console.log('midleware')
    next(); // allows the request to continue to the next middleware in line
}) */


// duplicated for the sake of next()
app.use('/add-product', (req, res, next) => {
    console.log('midleware2')
    res.send('<h1>add product page</h1>'); //res.send() and send in general also .send() sets headers in html automatically
})

app.use('/', (req, res, next) => {
    console.log('midleware2')
    res.send('<h1>hello froms express</h1>'); //res.send() and send in general also .send() sets headers in html automatically
})

app.listen(3000); //this is less code but same functionality. because of express.js this is done in smaller chunks