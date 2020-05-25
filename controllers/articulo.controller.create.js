const mongoose = require('mongoose');
const {validationResult} = require('express-validator')
const ArticulosModel = require('../models/articulo.model');

exports.CrearArticulo = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const articulo = new ArticulosModel(req.body);
    try {
        await articulo.save();
        res.send(articulo);
    } catch (err) {
        res.status(500).send(err);
    }
}
