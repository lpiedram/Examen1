'use strict'

const pokemonModel = require('./pokemon.model');

module.exports.registrar = function (req, res) {
    let nuevoPokemon = new pokemonModel({
        numero: req.body.numero,
        nombre: req.body.nombre,
        tipo1: req.body.tipo1,
        tipo2: req.body.tipo2,
        foto: req.body.foto
    });

    nuevoPokemon.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el pokemon, ocurrió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El pokemon se registró con éxito' });
        }
    });
};

module.exports.listar = function (req, res) {
    pokemonModel.find().then(
        function (pokemon) {
            res.send(pokemon);
        }
    );
};

module.exports.filtrar = function (req, res) {
    switch (req.body.tipo) {
        case "1":
            pokemonModel.find(
                {
                    "numero": req.body.valor
                }
            ).then(
                function (pokemons) {
                    res.send(pokemons);
                });
            break;

        case "2":
            pokemonModel.find(
                {
                    "nombre": {
                        $regex: new RegExp(req.body.valor, "ig")
                    }
                }
            ).then(
                function (pokemons) {
                    res.send(pokemons);
                });
            break;

        case "3":
            pokemonModel.find(
                {
                    "tipo1": req.body.valor
                }
            ).then(
                function (pokemons) {
                    res.send(pokemons);
                });
            break;

        case "4":
            pokemonModel.find(
                {
                    "tipo2": req.body.valor
                }
            ).then(
                function (pokemons) {
                    res.send(pokemons);
                });
            break;
    }
};