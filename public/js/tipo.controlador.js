'use strict'
imprimirListaTipo()

let btnRegistrar = document.querySelector('#btnRegistrar');

btnRegistrar.addEventListener('click', obtenerDatos);

let inputTipo1 = document.querySelector('#txtTipo1');
let inputTipo2 = document.querySelector('#txtTipo2');

let inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', imprimirListaTipo);

function obtenerDatos() {
    let infoTipo = [];
    let bError = false;

    let STipo1 = inputTipo1.value;
    let STipo2 = inputTipo2.value;

    infoTipo.push(STipo1, STipo2);

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el Tipo',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el Tipo');
    } else {
        registrarTipo(infoTipo);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El Tipo se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });
        imprimirListaTipo();
        limpiarFormulario();
    }
};

function imprimirListaTipo() {
    let mlistaTipo = obtenerListaTipo();
    let tbody = document.querySelector('#tblTipo tbody');
    tbody.innerHTML = '';
    let sFiltro = document.querySelector('#txtFiltro').value;

    if (sFiltro == '') {
        mlistaTipo = obtenerListaTipo();
    } else {
        mlistaTipo = obtenerListaTipoFiltrado(sFiltro);
    }

    for (let i = 0; i < mlistaTipo.length; i++) {
        let fila = tbody.insertRow();

        let cTipo1 = fila.insertCell();
        let cTipo2 = fila.insertCell();
        
        cTipo1.innerHTML = mlistaTipo[i]['tipo1'];
        cTipo2.innerHTML = mlistaTipo[i]['tipo2'];
    }

};

function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;

    //Validación del tipo 1
    if (inputTipo1.value == '' || (regexSoloLetras.test(inputTipo1.value) == false)) {
        inputTipo1.classList.add('error_input');
        bError = true;
    } else {
        inputTipo1.classList.remove('error_input');
    }
    //Validación del tipo2
    if (inputTipo2.value == '' || (regexSoloLetras.test(inputTipo2.value) == false)) {
        inputTipo2.classList.add('error_input');
        bError = true;
    } else {
        inputTipo2.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario() {
    inputTipo1.value = '';
    inputTipo2.value = 0;
}