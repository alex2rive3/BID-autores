const mongoose = require('mongoose');
const AutorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        minlength: [5, 'El minimo es de 10']
    },
    apellido: {
        type: String,
        minlength: [5, 'El minimo es de 10']
    }
}, { timestamps: true });
module.exports.Autor = mongoose.model('Autor', AutorSchema);

