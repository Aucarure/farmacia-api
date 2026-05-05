const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrdenCompra = sequelize.define('OrdenCompra', {
  NroOrdenC: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fechaEmision: DataTypes.DATE,
  Situacion: DataTypes.STRING,
  Total: DataTypes.FLOAT,
  NrofacturaProv: DataTypes.STRING
});

module.exports = OrdenCompra;