const { Medicamento } = require('../models');

const listar = async (req, res) => {
  const data = await Medicamento.findAll();
  res.json(data);
};

const crear = async (req, res) => {
  try {
    const med = await Medicamento.create(req.body);
    res.status(201).json(med);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizar = async (req, res) => {
  try {
    await Medicamento.update(req.body, { where: { CodMedicamento: req.params.id } });
    res.json({ mensaje: 'Actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const eliminar = async (req, res) => {
  try {
    await Medicamento.destroy({ where: { CodMedicamento: req.params.id } });
    res.json({ mensaje: 'Eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { listar, crear, actualizar, eliminar };