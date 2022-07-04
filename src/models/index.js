'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const userModel=require('./user-model')
const itemsModel = require('./item-model')
const commentsModel=require('./comment');

const DATABASE_URL = process.env.NODE_ENV ==='test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

let UserModel =userModel(sequelize, DataTypes)
let CommentsModel = commentsModel(sequelize,DataTypes)
let ItemsModel = itemsModel(sequelize,DataTypes)

UserModel.hasMany(ItemsModel)
ItemsModel.belongsTo(UserModel)

UserModel.hasMany(CommentsModel)
CommentsModel.belongsTo(UserModel)

ItemsModel.hasMany(CommentsModel)
CommentsModel.belongsTo(ItemsModel)

module.exports={
    database:sequelize,
    userModel : UserModel,
    itemsModel : ItemsModel,
    commentsModel : CommentsModel
}
