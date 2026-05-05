const router = require('express').Router();
const { crearOrden, listar } = require('../controllers/ventaController');
const { verificarToken, verificarRol } = require('../middleware/auth');

router.get('/', verificarToken, verificarRol('ADMIN', 'VENDEDOR'), listar);
router.post('/', verificarToken, verificarRol('ADMIN', 'VENDEDOR'), crearOrden);

module.exports = router;