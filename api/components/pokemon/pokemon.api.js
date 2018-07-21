'use strict';
const pokemonModel = require('./pokemon.model');

//Función para registrar un pokemon
module.exports.registrar = function(req, res){
    //Crea una variable nuevopokemon utilizando como plantilla el pokemonModel
    let nuevopokemon = new pokemonModel({
        id : req.body.id,
        numero : req.body.numero,
        nombre : req.body.nombre
        // tipo1 : req.body.tipo1,
        // tipo2 : req.body.tipo2
    });

    nuevopokemon.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el pokemon, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El pokemon se registró con éxito'});
        }

    });

};

module.exports.listar = function(req, res){
    pokemonModel.find().then(
        function(pokemones){
            res.send(pokemones);
        });
};