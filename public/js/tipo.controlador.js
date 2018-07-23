'use strict'
imprimirListaTipo()

let btnRegistrar = document.querySelector('#btnRegistrar');

btnRegistrar.addEventListener('click', obtenerDatos);

let inputTipo1 = document.querySelector('#txtTipo1');

let inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', imprimirListaTipo);

function obtenerDatos() {
    let infoTipo = [];
    let bError = false;

    let STipo1 = inputTipo1.value;

    infoTipo.push(STipo1);

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
        
        cTipo1.innerHTML = mlistaTipo[i]['tipo1'];
    }

};

function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;

    //Validación del tipo
    if (inputTipo1.value == '' || (regexSoloLetras.test(inputTipo1.value) == false)) {
        inputTipo1.classList.add('error_input');
        bError = true;
    } else {
        inputTipo1.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario() {
    inputTipo1.value = '';
}