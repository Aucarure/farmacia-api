const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicamento = sequelize.define('Medicamento', {
  CodMedicamento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcionMed: DataTypes.STRING,
  fechaFabricacion: DataTypes.DATE,
  fechaVencimiento: DataTypes.DATE,
  Presentacion: DataTypes.STRING,
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  precioVentaUni: DataTypes.FLOAT,
  precioVentaPres: DataTypes.FLOAT,
  Marca: DataTypes.STRING
});

module.exports = Medicamento;