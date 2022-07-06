const router = require('express').Router();
const {userModel,cartModel} = require('../models/index')

router.post('/cart/:id',async(req,res)=>{
    let id = req.params.id
    let {itemName,itemPrice}=req.body
    let cart = await cartModel.create({
        itemName:itemName,
        itemPrice:itemPrice,
        userId:id
    })

})
router.get('/cart/:id',async(req,res)=>{
    let id = req.params.id
    let cart = await cartModel.findAll({where:{userId:id}})
    res.status(200).json({
        'cart':cart
    })
})
router.delete('/cart/:id',async(req,res)=>{
    let id = req.params.id
    let cart = await cartModel.destroy({where:{id:id}})
    res.status(200).send(`cart  was deleted sucsessfully`)
})
module.exports=router;