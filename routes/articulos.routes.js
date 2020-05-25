const express = require('express');
const { check } = require('express-validator')
const router = express.Router();


//se trae el controlador del articulo
const articuloControllerCreate = require('../controllers/articulo.controller.create')
const articuloControllerRead = require('../controllers/articulo.controller.read')
const articuloControllerUpdate = require('../controllers/articulo.controller.update')
const articuloControllerDelete = require('../controllers/articulos.controller.delete')

//A partir del Modelo -> creamos el documento
router.post('/', [  
    //todos los check del titulo
    check('title', 'El Titulo no esta').notEmpty(),
    check('title', 'Hasta 40 Caracteres como max Compagre').isLength({max: 40}),
    check('title', 'Como Minimo Son 10 Caracteres Capo').isLength({min: 10}),
    //todos los check del Cuerpo del mensaje
    check('body', 'El Cuerpo del mensaje no esta').notEmpty() ,
    check('body', 'Hasta 40 Caracteres como max Compagre').isLength({max: 40}),
    check('body', 'Como Minimo Son 10 Caracteres Capo').isLength({min: 10}),
], 
    articuloControllerCreate.CrearArticulo)

//Traemos todos los Documentos
router.get('/', articuloControllerRead.MostrarArticulos)

//Traemos un Documento
router.get('/:id', articuloControllerRead.MostrarArticulo)

//Modificamos el Documento
router.put('/:id', articuloControllerUpdate.ModificarArticulo)

//Borramos el Documento
router.delete('/:id', articuloControllerDelete.EliminarArticulo)

module.exports = router;