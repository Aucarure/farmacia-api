const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DetalleOrdenCompra = sequelize.define('DetalleOrdenCompra', {
  descripcion: DataTypes.STRING,
  cantidad: DataTypes.INTEGER,
  precio: DataTypes.FLOAT,
  montouni: DataTypes.FLOAT
});

module.exports = DetalleOrdenCompra;