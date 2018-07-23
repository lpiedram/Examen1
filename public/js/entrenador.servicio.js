'use strict';


function registrarEntrenador(painfoEntrenador) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_entrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            numero: painfoEntrenador[0],
            nombre: painfoEntrenador[1],
            edad: painfoEntrenador[2],
            sexo: painfoEntrenador[3],
            foto: painfoEntrenador[4]
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    console.log(respuesta);
    return respuesta;

}
function obtenerListaEntrenadores() {
    let mlistaEntrenadores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/lista_entrenador',
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

    return mlistaEntrenadores;
}

function filtrarEntrenadores(cTipo, cValor) {
    let mlistaEntrenadores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/filtrar_entrenador',
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

    return mlistaEntrenadores;
}
