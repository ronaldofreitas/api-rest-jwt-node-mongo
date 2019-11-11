const router = require('express').Router()
const controller = require('../app/controllers/usuarios');

router.post('/authenticate', controller.autenticar);
router.post('/register', controller.criar);

module.exports = router;