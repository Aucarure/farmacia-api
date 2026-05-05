const sequelize = require('../config/database');
const Medicamento = require('./Medicamento');
const Laboratorio = require('./Laboratorio');
const OrdenCompra = require('./OrdenCompra');
const DetalleOrdenCompra = require('./DetalleOrdenCompra');
const OrdenVenta = require('./OrdenVenta');
const DetalleOrdenVta = require('./DetalleOrdenVta');
const Usuario = require('./Usuario');

// Asociaciones
Laboratorio.hasMany(OrdenCompra, { foreignKey: 'CodLab' });
OrdenCompra.belongsTo(Laboratorio, { foreignKey: 'CodLab' });

OrdenCompra.hasMany(DetalleOrdenCompra, { foreignKey: 'NroOrdenC' });
DetalleOrdenCompra.belongsTo(OrdenCompra, { foreignKey: 'NroOrdenC' });

Medicamento.hasMany(DetalleOrdenCompra, { foreignKey: 'CodMedicamento' });
DetalleOrdenCompra.belongsTo(Medicamento, { foreignKey: 'CodMedicamento' });

OrdenVenta.hasMany(DetalleOrdenVta, { foreignKey: 'NroOrdenVta' });
DetalleOrdenVta.belongsTo(OrdenVenta, { foreignKey: 'NroOrdenVta' });

Medicamento.hasMany(DetalleOrdenVta, { foreignKey: 'CodMedicamento' });
DetalleOrdenVta.belongsTo(Medicamento, { foreignKey: 'CodMedicamento' });

module.exports = { sequelize, Usuario, Medicamento, Laboratorio, OrdenCompra, DetalleOrdenCompra, OrdenVenta, DetalleOrdenVta };