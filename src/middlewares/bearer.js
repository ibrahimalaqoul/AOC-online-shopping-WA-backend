'use strict';
require('dotenv').config();

const { userModel } = require('../models/index')
const JWT = require("jsonwebtoken");

const SECRET = process.env.SECRET || "something";

const bearer = async (req, res, next) => {
    if (req.headers.authorization) {
        try {
            let bearerHeaders = req.headers.authorization.split(' ')
            console.log(bearerHeaders)
            let token = bearerHeaders.pop()
            if (token) {
                const tokenOfUser = JWT.verify(token, SECRET)
                console.log(tokenOfUser)
                const User = await userModel.findOne({
                    where: { userName: tokenOfUser.userName }
                })
                if (User) {
                    req.token = tokenOfUser;
                    req.User = User;
                    next()
                } else {
                    res.status(401).send("Unauthorized user");
                }
            }
        }
        catch {
            res.status(401).send("Unauthorized Token");
        }

    } else {
        res.status(403).send("Empty Token");
    }
}
module.exports=bearer;