// const bearer =require('../middlewares/bearer')
const router = require('express').Router();

const bcrypt = require("bcrypt");

const { userModel } = require('../models/index');



router.post('/signup/users',async(req,res)=>{
try {
    console.log(req)
    let { email, password,userName,firstName,lastName } = req.body;
    let hasedPwd = await bcrypt.hash(password,5)
    let createdUser = await userModel.create({
        email:email,
        password:hasedPwd,
        userName:userName,
        firstName:firstName,
        lastName:lastName

    }) 
    res.status(201).json({'userInfo':createdUser})
    
} catch (error) {
    res.json({
        status:500,
        message :`error occoured${error}`
    })
}
});

module.exports=router;