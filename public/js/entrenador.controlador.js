'use strict'
imprimirListaEntrenador()

let btnRegistrar = document.querySelector('#btnRegistrar');
btnRegistrar.addEventListener('click', obtenerDatos);

let inputNumero = document.querySelector('#txtNum');
let inputNombre = document.querySelector('#txtNombre');
let inputEdad = document.querySelector('#txtEdad');
let inputsGenero = document.querySelectorAll('input[type=radio]');

let inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', filtrarDatos);

function obtenerDatos() {
    let infoEntrenador = [];
    let bError = false;

    infoEntrenador.push(
        inputNumero.value,
        inputNombre.value,
        inputEdad.value,
        inputSexo.value,
        inputFoto.value
    );

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el Entrenador',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el Entrenador');
    } else {
        registrarEntrenador(infoEntrenador);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El Entrenador se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });
        imprimirListaEntrenador();
        limpiarFormulario();
    }
};

function imprimirListaEntrenadores() {
    let mlistaEntrenadores = obtenerListaEntrenadores();
    let tbody = document.querySelector('#tbEntrenadores tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mlistaEntrenadores.length; i++) {
        let fila = tbody.insertRow();
        let cNumero = fila.insertCell();
        let cNombre = fila.insertCell();
        let cEdad = fila.insertCell();
        let cSexo = fila.insertCell();
        let cFoto = fila.insertCell();

        cNumero.innerHTML = mlistaEntrenadores[i]['Numero'];
        cNombre.innerHTML = mlistaEntrenadores[i]['Nombre'];
        cEdad.innerHTML = mlistaEntrenadores[i]['Edad'];
        cSexo.innerHTML = mlistaEntrenadores[i]['Sexo'];
        cFoto.innerHTML = '<img src="' + mlistaEntrenadores[i]['Foto'] + '">';

    }

};

function filtrarDatos() {
    if (inputFiltro.value != null || inputFiltro.value != "") {
        let mlistaEntrenadores = filtrarEntrenadores("2", inputFiltro.value);
        let tbody = document.querySelector('#tbEntrenadores tbody');
        tbody.innerHTML = '';

        for (let i = 0; i < mlistaEntrenadores.length; i++) {
            let fila = tbody.insertRow();
            let cNumero = fila.insertCell();
            let cNombre = fila.insertCell();
            let cEdad = fila.insertCell();
            let cSexo = fila.insertCell();
            let cFoto = fila.insertCell();
            cNumero.innerHTML = mlistaEntrenadores[i]['numero'];
            cNombre.innerHTML = mlistaEntrenadores[i]['nombre'];
            cEdad.innerHTML = mlistaEntrenadores[i]['edad'];
            cSexo.innerHTML = mlistaEntrenadores[i]['sexo'];
            cFoto.innerHTML = '<img src="' + mlistaEntrenadores[i]['foto'] + '">';

        }
    } else {
        imprimirListaEntrenadores();
    }
};

function validar() {
    let bError = null;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación de la numero
    if (inputNumero.value == '' || (regexSoloNumeros.test(inputNumero.value) == false) || Number(inputNumero.value) < Number(inputNumero.min) || Number(inputNumero.value) > Number(inputNumero.max)) {
        inputNumero.style.border = "1px solid #e74c3c";
        bError = "El campo Numero solo acepta numeros -";
    } else {
        inputNumero.style.border = "0px solid #e74c3c";
    }

    //Validación del nombre
    if (inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value) == false)) {
        inputNombre.style.border = "1px solid #e74c3c";
        if (bError == null) {
            bError = "";
        }
        bError = bError + "El campo Nombre solo recibe letras -";
    } else {
        inputNombre.style.border = "0px solid #e74c3c";
    }

    //Validación de foto
    if (inputFoto.value == '') {
        if (bError == null) {
            bError = "";
        }
        bError = bError + "Por favor agregue una foto -";
    }

    //Validación de sexo
    if (inputSexo.value == '') {
        if (bError == null) {
            bError = "";
        }
        inputSexo.style.border = "1px solid #e74c3c";
        bError = bError + "Seleccione opcion en el campo Sexo -";
    } else {
        inputSexo.style.border = "0px solid #e74c3c";
    }

    //Validación de la edad
    if (inputEdad.value == '' || (regexSoloNumeros.test(inputEdad.value) == false) || Number(inputEdad.value) <= Number(inputEdad.min) || Number(inputEdad.value) >= Number(inputEdad.max)) {
        inputEdad.style.border = "1px solid #e74c3c";
        if (bError == null) {
            bError = "";
        }
        bError = bError + "El campo Edad solo recibe numeros, y la edad de ser mayor a 15 y menor a 80 ";
    } else {
        inputEdad.style.border = "0px solid #e74c3c";
    }


    return bError;
};

function limpiarFormulario() {
    inputNumero.value = null;
    inputNombre.value = null;
    inputEdad.value = null;
    inputSexo.value = null;
    inputFoto.value = "";
}