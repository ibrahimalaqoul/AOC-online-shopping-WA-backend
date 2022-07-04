'use strict';

const Items=(sequelize,DataTypes)=> sequelize.define('items',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,

    },
    itemName:{
        type :DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    itemImg:{
        type :DataTypes.STRING,
        allowNull: false,
    },
    itemDescreption:{
        type :DataTypes.STRING(1000),
        allowNull: false,
    },
    itemPrice:{
        type : DataTypes.INTEGER,
        allowNull : false,
    }
})
module.exports=Items