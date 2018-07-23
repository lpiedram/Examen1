'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    numero: { type: Number, unique: true, required: true },
    nombre: { type: String, unique: true, required: true },
    tipo1: { type: String, required: true },
    tipo2: { type: String, required: false },
    foto: { type: String, required: true }
});

module.exports = mongoose.model('pokemon', pokemonSchema);