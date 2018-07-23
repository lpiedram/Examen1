'use strict';

function registrarPokemon(infoPokemon) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            numero: infoPokemon[0],
            nombre: infoPokemon[1],
            tipo1: infoPokemon[2],
            tipo2: infoPokemon[3],
            imagen: imagenUrl
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}
function obtenerListaPokemon() {
    let listaPokemon = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_pokemon',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;

    return listaPokemon;
}

function filtrarPokemones(cTipo, cValor) {
    let mlistaPokemon = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/filtrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            tipo: cTipo,
            valor: cValor
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;

    return mlistaPokemon;
}