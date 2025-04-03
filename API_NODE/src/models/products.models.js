const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/db');

const Products = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    count: { type: DataTypes.INTEGER },
    price: { type: DataTypes.FLOAT }
})

module.exports = Products;