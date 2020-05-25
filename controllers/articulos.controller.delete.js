const mongoose = require('mongoose');
const ArticulosModel = require('../models/articulo.model');

exports.EliminarArticulo = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'El ID no Existe'});
        }
        
        const articulos = await ArticulosModel.findByIdAndDelete(req.params.id)
        //logica si existe o no el arituculo
        if (!articulos) res.status(404).send('No Existe lo que intentas Borrar')

        res.status(200).send({ mensaje: 'Se ha Eliminado el Articul o Correctamente' })
    } catch (err) {
        res.status(500).send(err);
    }
}