const router = require('express').Router()
const controller = require('../app/controllers/comentarios');

router.get('/', controller.comentarios);
router.get('/:filmeId', controller.comentariosByFilme);
router.post('/', controller.criar);

module.exports = router;