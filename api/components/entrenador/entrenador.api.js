'use strict'

const entrenadorModel = require('./entrenador.model');

module.exports.registrar = function (req, res) {
    let nuevoEntrenador = new entrenadorModel({
        numero: req.body.numero,
        nombre: req.body.nombre,
        edad: req.body.edad,
        sexo: req.body.sexo,
        foto: req.body.foto
    });

    nuevoEntrenador.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el entrenador, ocurrió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El entrenador se registró con éxito' });
        }
    });
};

module.exports.listar = function (req, res) {
    entrenadorModel.find().then(
        function (entrenadores) {
            res.send(entrenadores);
        }
    );
};

module.exports.filtrar = function (req, res) {
    switch (req.body.tipo) {
        case "1":
            entrenadorModel.find(
                {
                    "numero": req.body.valor

                }
            ).then(
                function (entrenadores) {
                    res.send(entrenadores);
                });
            break;

        case "2":
            entrenadorModel.find(
                {
                    "nombre": {
                        $regex: new RegExp(req.body.valor, "ig")
                    }
                }
            ).then(
                function (entrenadores) {
                    res.send(entrenadores);
                });
            break;

        case "3":
            entrenadorModel.find(
                {
                    "edad": req.body.valor
                }
            ).then(
                function (entrenadores) {
                    res.send(entrenadores);
                });
            break;

        case "4":
            entrenadorModel.find(
                {
                    "sexo": req.body.valor
                }
            ).then(
                function (entrenadores) {
                    res.send(entrenadores);
                });
            break;
    }
};