'use strict';
let mongoose = require('mongoose');

let tipoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    tipo1: { type: String, required: true },
    tipo2: { type: String}
});

module.exports = mongoose.model('tipo', tipoSchema);