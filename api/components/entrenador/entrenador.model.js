'use strict';
let mongoose = require('mongoose');

let pokemon = mongoose.Schema({
    numero: { type: Number, required: true },
    mote: { type: String, required: true }
});


let entrenadorSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    nombre: { type: String, required: true },
    edad: { type: String, required: true },
    genero: { type: String, required: true },
    Foto: { type: String, required: true },
    ColeccionPokemons: [pokemon]
});

module.exports = mongoose.model('entrenador', entrenadorSchema);