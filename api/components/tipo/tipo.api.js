'use strict';
const tipoModel = require('./tipo.model');

//Función para registrar un tipo
module.exports.registrar = function (req, res) {
    //Crea una variable nuevotipo utilizando como plantilla el tipoModel
    let nuevotipo = new tipoModel({
        id: req.body.id,
        tipo1: req.body.tipo1,
        tipo2: req.body.tipo2
    });

    nuevotipo.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el tipo, ocurrió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El tipo se registró con éxito' });
        }

    });

};

module.exports.listar = function (req, res) {
    tipoModel.find().then(
        function (tipo) {
            res.send(tipo);
        });
};