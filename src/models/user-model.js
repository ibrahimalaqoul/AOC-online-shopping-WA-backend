'use strict';
const User = (sequelize,DataTypes)=> sequelize.define('user',{ 
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        len: [8, 16],
        allowNull: false,
    },
    userName :{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName :{
        type: DataTypes.STRING,
        allowNull: false,
    },

    token:{
        type: DataTypes.VIRTUAL
    },
})
module.exports = User;