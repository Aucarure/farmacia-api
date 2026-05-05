const router = require('express').Router();
const { crearOrden, listar } = require('../controllers/compraController');
const { verificarToken, verificarRol } = require('../middleware/auth');

router.get('/', verificarToken, verificarRol('ADMIN', 'ALMACEN'), listar);
router.post('/', verificarToken, verificarRol('ADMIN', 'ALMACEN'), crearOrden);

module.exports = router;