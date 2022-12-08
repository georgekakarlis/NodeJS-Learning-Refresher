const express = require('express')

const app = express();

app.use('/users', (req,res,next) => {
    console.log('middleware2')
    res.send('<p>Hello from users</p>')
})
app.use('/', (req,res,next) => {
    console.log('middleware1')
    res.send('<p>Hello from middleware1</p>')
    
})


app.listen(3000);