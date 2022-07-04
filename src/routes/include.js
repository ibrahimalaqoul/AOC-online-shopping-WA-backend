'use strict';
const router = require('express').Router();
const {userModel,commentsModel,itemsModel}=require('../models/index')
const bearer =require('../middlewares/bearer')

router.get('/itemsForUser',bearer,async(req,res)=>{
    try {
        let user = await userModel.findAll({ include: [itemsModel] })

        res.status(200).json(user);

    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
})

router.get('/commentsForItem',async(req,res)=>{
    try {
        let item = await itemsModel.findAll({ include: [commentsModel] })

        res.status(200).json(item);

    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
})

module.exports=router;