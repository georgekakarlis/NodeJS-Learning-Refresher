//general note : always travelling top-to-bottom and the middlewares always work like that

const express = require('express')
const bodyParser = require('body-parser');

const app = express(); //app does a lot in the background. check with command + click for the source code written in defintion typescript (*.d.ts)

const adminRoutes = require('routes/admin')
const shopRoutes = require('routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

//routing
app.use('/admin' ,adminRoutes);
app.use(shopRoutes)

// 404 page
app.use((req, res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000); //this is less code but same functionality. because of express.js this is done in smaller chunks