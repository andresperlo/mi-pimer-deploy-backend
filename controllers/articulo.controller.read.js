const mongoose = require('mongoose');
const ArticulosModel = require('../models/articulo.model');


exports.MostrarArticulos =  async (req, res) => {

    try {
        const articulos = await ArticulosModel.find({})
        res.send(articulos)
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.MostrarArticulo = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'El ID no Existe'});
        }

        const articulos = await ArticulosModel.findById(req.params.id)

        if(!articulos){
            return res.status(404).json({mensaje: 'No Existe el Articulo'})
        }

        res.send(articulos)



    } catch (err) {
        res.status(500).send(err);
    }
}
