const mongoose = require('mongoose');

//creamos el esquema
const ArticulosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
    },

    body: {
        type: String,
        required: true,
        trim: true
    }
});
//A partir del esquema -> creamos el modelo
const ArticulosModel = mongoose.model('articulos', ArticulosSchema);

module.exports = ArticulosModel;