//fav Routes
const  router  = require('express').Router();
const bearer = require('../middlewares/bearer');
const {favModel, userModel} = require('../models/index')

router.post('/favs/:id',bearer,async(req,res)=>{
    let{itemName,
        itemImg,
        itemDescreption,
        itemPrice}=req.body
    let id = req.params.id
    let createdFav = await favModel.create({
        itemName :itemName,
        itemImg:itemImg,
        itemDescreption:itemDescreption,
        itemPrice:itemPrice,
        userId:id
    })
    res.status(201).json({
        'fav':createdFav
    })
})
router.get('/favs/:id',bearer,async(req,res)=>{
    let id = req.params.id
    let favs = await favModel.findAll({where:{userId:id}})
    res.status(200).json({
        'favs':favs
    })
})
router.delete('/favs/:id',bearer,async(req,res)=>{
    let id = req.params.id
    let deletedFav = await favModel.destroy({where:{id:id}})
    res.status(200).send(`fav  was deleted sucsessfully`)
})
module.exports=router;