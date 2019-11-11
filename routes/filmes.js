const router = require('express').Router()
const controller = require('../app/controllers/filmes');

router.get('/', controller.getFilmes);
router.post('/', controller.criar);
router.get('/:filmeId', controller.getById);
router.put('/:filmeId', controller.updateById);
router.delete('/:filmeId', controller.deleteById);
module.exports = router;