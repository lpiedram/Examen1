'use strict';
const entrenadorModel = require('./entrenador.model');

//Función para registrar un entrenador
module.exports.registrar = function (req, res) {
    //Crea una variable nuevoentrenador utilizando como plantilla el entrenadorModel
    let nuevoEntrenador = new entrenadorModel({
        id: req.body.id,
        numero: req.body.numero,
        nombre: req.body.nombre,
        edad: req.body.edad,
        genero: req.body.genero,
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
        });
};