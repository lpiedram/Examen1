'use strict'

let btnRegistrar = document.querySelector('#btnRegistrar');

btnRegistrar.addEventListener('click', obtenerDatos);

let inputNumero = document.querySelector('#txtNum');
let inputNombre = document.querySelector('#txtNombre');

function obtenerDatos() {
    let infoPokemon = [];
    let bError = false;

    let nNum = inputNumero.value;
    let sNom = inputNombre.value;
    
    // let slTipo1 = document.createElement('select');
    // let slTipo2 = document.createElement('select');

    infoPokemon.push(nNum, sNom);

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el pokemon',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el pokemon');
    } else {
        registrarPokemon(infoPokemon);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El pokemon se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });
        imprimirListaPokemon();
        limpiarFormulario();
    }
};

function imprimirListaPokemon() {
    let listaPokemon = obtenerListaPokemon();
    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < listaPokemon.length; i++) {
        let fila = tbody.insertRow();

        let cCant = fila.insertCell();
        let cNombre = fila.insertCell();
        // let cTipo1 = fila.insertCell();
        // let cTipo2 = fila.insertCell();

        cCant.innerHTML = listaPokemon[i]['numero'];
        cNombre.innerHTML = listaPokemon[i]['nombre'];
        // cTipo1.innerHTML = listaPokemon[i]['tipo1'];
        // cTipo2.innerHTML = listaPokemon[i]['tipo2'];
    }

};

function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre completo
    if (inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value) == false)) {
        inputNombre.classList.add('error_input');
        bError = true;
    } else {
        inputNombre.classList.remove('error_input');
    }
    //Validación del Cantidad
    if (inputNumero.value == '' || (regexSoloNumeros.test(inputNumero.value) == false) || Number(inputNumero.value) < Number(inputNumero.min) || Number(inputNumero.value) > Number(inputNumero.max)) {
        inputNumero.classList.add('error_input');
        bError = true;
    } else {
        inputNumero.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario() {
    inputNombre.value = '';
    inputNumero.value = 0;
}