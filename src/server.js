'use strict';

require('dotenv').config();

const express = require('express')
const app = express();
const notFound=require('./error-handlers/404')
const error505 =require('./error-handlers/500')
const signupRoute = require('./routes/signup')
const signInRoute=require('./routes/signin')
const itemRoute=require('./routes/items')
const commentsRoute=require('./routes/comments')
const include=require('./routes/include')
const cors = require('cors')

app.use(express.json());

app.use(cors())
app.use(signupRoute)
app.use(signInRoute)
app.use(itemRoute)
app.use(commentsRoute)
app.use(include)
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Home Page')
});


function start(port){
    app.listen(port,()=>{
        console.log(`SERVER IS ACTIVE ON PORT ${port}`)
    })
}
app.use(notFound)
app.use(error505)

module.exports={
    app : app,
    start:start,
}