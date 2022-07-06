'use strict';

const Fav=(sequelize,DataTypes)=> sequelize.define('fav',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    itemName:{
        type :DataTypes.STRING,
        allowNull: false,
    },
    itemImg:{
        type :DataTypes.STRING,
    },
    itemDescreption:{
        type :DataTypes.STRING(1000),
    },
    itemPrice:{
        type : DataTypes.INTEGER,
       
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
    }
})
module.exports=Fav