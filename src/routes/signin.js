'use strict';

const router = require('express').Router();

const basic = require('../middlewares/basic')

router.post('/signIn',basic,async(req,res)=>{
    res.status(201).json({
        'signedInUser':req.User
    })
})
module.exports=router
