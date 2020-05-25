const express = require('express')
const router = express.Router();

const articulosRouter = require('./articulos.routes')

router.use('/articulos', articulosRouter)

module.exports = router;
