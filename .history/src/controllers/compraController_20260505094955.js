const { OrdenCompra, DetalleOrdenCompra, Medicamento } = require('../models');

const crearOrden = async (req, res) => {
  try {
    const { fechaEmision, Situacion, Total, NrofacturaProv, CodLab, detalles } = req.body;
    const orden = await OrdenCompra.create({ fechaEmision, Situacion, Total, NrofacturaProv, CodLab });

    for (const d of detalles) {
      await DetalleOrdenCompra.create({ ...d, NroOrdenC: orden.NroOrdenC });
      await Medicamento.increment('stock', { by: d.cantidad, where: { CodMedicamento: d.CodMedicamento } });
    }

    res.status(201).json({ mensaje: 'Orden de compra registrada', orden });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listar = async (req, res) => {
  const data = await OrdenCompra.findAll({ include: [DetalleOrdenCompra] });
  res.json(data);
};

module.exports = { crearOrden, listar };