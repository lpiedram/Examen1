const express = require('express');
const router = express.Router();
const entrenadores = require('./entrenador.api');

router.route('/registrar_entrenador')
    .post(function (req, res) {
        entrenadores.registrar(req, res);
    });

router.route('/listar_entrenador')
    .get(function (req, res) {
        entrenadores.listar(req, res);
    });

router.route('/filtrar_entrenador')
    .post(function (req, res) {
        entrenadores.filtrar(req, res);
    });

module.exports = router;