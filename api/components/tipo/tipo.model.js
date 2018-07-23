'use strict';
let mongoose = require('mongoose');

let tipoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    tipo1: { type: String, required: true }
});

module.exports = mongoose.model('tipo', tipoSchema);