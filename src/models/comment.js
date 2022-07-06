'use strict';

const  comments =(sequelize,DataTypes)=> sequelize.define('comments',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,

    },
    commentContent:{
        type :DataTypes.STRING(10000),
    },
    userName :{
        type: DataTypes.STRING,
        allowNull: false,
    },
})
module.exports= comments