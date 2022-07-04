'use strict';

require('dotenv').config();

const base64 = require('base-64');
const bycrypt=require('bcrypt');
const JWT=require('jsonwebtoken');
const {userModel}=require('../models/index')
const SECRET = process.env.SECRET || "ibrahim's secret";

const basic = async(req,res,next)=>{
    let userCridential = req.headers.authorization;
    console.log(userCridential)
    try{
        if(userCridential){
            let credentialParts =userCridential.split(' ');
            let encodedParts = credentialParts.pop();
            let decodedParts = base64.decode(encodedParts)
            let [userName,password] = decodedParts.split(":")
            const User = await userModel.findOne({where : {userName:userName}})
            console.log(User)
            const pass = await bycrypt.compare(password,User.password)
            if(pass){
                let generatedToken = JWT.sign({userName :User.userName},SECRET,{expiresIn : '7d'})
                User.token = generatedToken;
                req.User = User
                next()
            }else{
                res.status(403).send('invalid Password')

            }
        }
    } catch{
        res.status(403).send('invalid user name')
    }
}
module.exports=basic