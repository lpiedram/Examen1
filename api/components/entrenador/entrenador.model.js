'use strict';
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    numero: { type: Number, required: true },
    nombre: { type: String, required: true },
    edad: { type: String, required: true },
    genero: { type: String, required: true },
    foto: { type: String, required: true }
});

module.exports = mongoose.model('entrenador', entrenadorSchema);