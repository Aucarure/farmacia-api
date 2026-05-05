const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DetalleOrdenVta = sequelize.define('DetalleOrdenVta', {
  descripcionMed: DataTypes.STRING,
  cantidadRequerida: DataTypes.INTEGER
});

module.exports = DetalleOrdenVta;