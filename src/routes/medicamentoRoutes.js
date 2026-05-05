const router = require('express').Router();
const { listar, crear, actualizar, eliminar } = require('../controllers/medicamentoController');
const { verificarToken, verificarRol } = require('../middleware/auth');

router.get('/', verificarToken, listar);
router.post('/', verificarToken, verificarRol('ADMIN', 'ALMACEN'), crear);
router.put('/:id', verificarToken, verificarRol('ADMIN', 'ALMACEN'), actualizar);
router.delete('/:id', verificarToken, verificarRol('ADMIN'), eliminar);

module.exports = router;