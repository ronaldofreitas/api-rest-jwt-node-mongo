const router = require('express').Router()
const controller = require('../app/controllers/categorias');

router.get('/', controller.categorias);
router.post('/', controller.criar);

module.exports = router;