const mongoose = require('mongoose');
const ArticulosModel = require('../models/articulo.model');

exports.ModificarArticulo = async (req, res) => {

    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({mensaje: 'El ID no Existe'});
        }
        
        const articulos = await ArticulosModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(articulos || {})
    } catch (err) {
        res.status(500).send(err);
    }
}
