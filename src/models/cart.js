'use strict';

const Cart=(sequelize,DataTypes)=> sequelize.define('cart',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    itemName:{
        type :DataTypes.STRING,
        allowNull: false,
    },
    itemPrice:{
        type : DataTypes.INTEGER,
       
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
    }
})
module.exports=Cart