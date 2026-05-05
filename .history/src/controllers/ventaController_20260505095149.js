const { OrdenVenta, DetalleOrdenVta, Medicamento } = require('../models');

const crearOrden = async (req, res) => {
  try {
    const { fechaEmision, Motivo, Situacion, detalles } = req.body;

    for (const d of detalles) {
      const med = await Medicamento.findByPk(d.CodMedicamento);
      if (!med) return res.status(404).json({ mensaje: `Medicamento ${d.CodMedicamento} no encontrado` });
      if (med.stock < d.cantidadRequerida)
        return res.status(400).json({ mensaje: `Stock insuficiente para ${med.descripcionMed}` });
    }

    const orden = await OrdenVenta.create({ fechaEmision, Motivo, Situacion });

    for (const d of detalles) {
      await DetalleOrdenVta.create({ ...d, NroOrdenVta: orden.NroOrdenVta });
      await Medicamento.decrement('stock', { by: d.cantidadRequerida, where: { CodMedicamento: d.CodMedicamento } });
    }

    res.status(201).json({ mensaje: 'Orden de venta registrada', orden });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listar = async (req, res) => {
  const data = await OrdenVenta.findAll({ include: [DetalleOrdenVta] });
  res.json(data);
};

module.exports = { crearOrden, listar };