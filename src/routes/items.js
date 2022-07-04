'use strict';
const router = require('express').Router();
const bearer = require('../middlewares/bearer');
const {itemsModel, userModel} = require('../models/index')

router.post('/addItem/:id',bearer,async(req,res)=>{
    let{itemName,itemImg,itemDescreption,itemPrice}=req.body
    let id = req.params.id
    let createdItem = await itemsModel.create({
        itemName :itemName,
        itemImg:itemImg,
        itemDescreption:itemDescreption,
        itemPrice:itemPrice,
        userId:id
    })
    res.status(201).json({
        'item':createdItem
    })
})
router.get('/items',bearer,async(req,res)=>{

    let items = await itemsModel.findAll()
    res.status(200).json({
        'allitems':items
    })
})
router.get('/item/:id',bearer,async(req,res)=>{

    let id = req.params.id
    let item = await itemsModel.findOne({where:{id:id}})
    res.status(200).json({
        'item':item
    })
})
router.get('/allitemsForUser/:id',async(req,res)=>{
    let id = req.params.id
    let ItemsForUser= await itemsModel.findAll({where:{userId:id}})
    res.status(200).json({'allItemsForUser':ItemsForUser})

})
router.put('/updateItem/:id',bearer,async(req,res)=>{
    let id=req.params.id
    let {itemName,itemImg,itemDescreption,itemPrice}=req.body
    let chosenItem = await itemsModel.findOne({where:{id:id}})
    let updatedItem = chosenItem.update({
        itemName:itemName,
        itemImg:itemImg,
        itemDescreption:itemDescreption,
        itemPrice:itemPrice
    })
    res.status(201).json({
        'updatedItem':chosenItem
    })

})
router.delete('/deleteItem/:id',bearer,async(req,res)=>{
    let id = req.params.id
    let deletedItem = await itemsModel.destroy({where:{id:id}})
    res.status(200).send(`item  was deleted sucsessfully`)
})
module.exports=router;