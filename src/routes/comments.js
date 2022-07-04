'use strict';
const router = require('express').Router();
const bearer = require('../middlewares/bearer');
const {commentsModel} = require('../models/index')

router.post('/addComment/:userId/:itemId',bearer,async(req,res)=>{
    let{commentContent,userName}=req.body
    let userId = req.params.userId
    let itemId = req.params.itemId

    let createdComment = await commentsModel.create({
        commentContent :commentContent,
        userId:userId,
        itemId:itemId,
        userName:userName

    })
    res.status(201).json({
        'comment':createdComment,
    })
})
router.get('/comments',bearer,async(req,res)=>{

    let comments = await commentsModel.findAll()
    res.status(200).json({
        'allcomments':comments
    })
})
router.get('/comment/:id',bearer,async(req,res)=>{

    let id = req.params.id
    let comment = await commentsModel.findOne({where:{id:id}})
    res.status(200).json({
        'comment':comment
    })
})
router.get('/allCommentsForItem/:userId/:itemId',async(req,res)=>{
    let userId = req.params.userId
    let itemId = req.params.itemId

    let commentsForItem= await commentsModel.findAll({where:{
        userId:userId,
        itemId:itemId
    }})
    res.status(200).json({'allCommentsForItem':commentsForItem})

})
router.put('/updatecomment/:id',bearer,async(req,res)=>{
    let id=req.params.id
    let {commentContent}=req.body
    let chosencomment = await commentsModel.findOne({where:{id:id}})
    let updatedcomment = chosencomment.update({
        commentContent:commentContent
    })
    res.status(201).json({
        'updatedcomment':chosencomment
    })

})
router.delete('/deletecomment/:id',bearer,async(req,res)=>{
    let id = req.params.id
    let deletedcomment = await commentsModel.destroy({where:{id:id}})
    res.status(200).send(`comment  was deleted sucsessfully`)
})
module.exports=router;