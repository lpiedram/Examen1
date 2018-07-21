'use strict'
imprimirListaPokemon()
mostrarTipo()

let btnRegistrar = document.querySelector('#btnRegistrar');

btnRegistrar.addEventListener('click', obtenerDatos);

let inputNumero = document.querySelector('#txtNum');
let inputNombre = document.querySelector('#txtNombre');
let sltTipo1 = document.querySelector('#sltTipo1');
let sltTipo2 = document.querySelector('#sltTipo2');
let inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', imprimirListaPokemon);

function obtenerDatos() {
    let infoPokemon = [];
    let bError = false;

    let nNum = inputNumero.value;
    let sNom = inputNombre.value;
    let slTipo1 = document.createElement('select');
    let slTipo2 = document.createElement('select');

    infoPokemon.push(nNum, sNom, slTipo1, slTipo2);

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
    let mlistaPokemon = obtenerListaPokemon();
    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';
    let sFiltro = document.querySelector('#txtFiltro').value;

    if (sFiltro == '') {
        mlistaPokemon = obtenerListaPokemon();
    } else {
        mlistaPokemon = obtenerListaPokemonFiltrado(sFiltro);
    }

    for (let i = 0; i < mlistaPokemon.length; i++) {
        let fila = tbody.insertRow();

        let cCant = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo1 = fila.insertCell();
        let cTipo2 = fila.insertCell();
        let imagen = document.createElement('img');
        imagen.src = listaPersonas[i]['foto'];
        imagen.classList.add('imageSettings');

        cFoto.appendChild(imagen);

        cCant.innerHTML = mlistaPokemon[i]['numero'];
        cNombre.innerHTML = mlistaPokemon[i]['nombre'];
        cTipo1.innerHTML = listaPokemon[i]['tipo1'];
        cTipo2.innerHTML = listaPokemon[i]['tipo2'];
    }

};
function mostrarTipo() {
    let mlistaPokemon = obtenerListaPokemon();
    let sltTipo1 = document.querySelector('#sltTipo1');

    for (let i = 0; i < mlistaPokemon.length; i++) {
        let opcion = document.createElement('option'); //crea el elemento option
        opcion.value = mlistaPokemon[i][1]; //Agregar el value que se puede obtener al seleccionar una opcion
        opcion.text = mlistaPokemon[i][1]; // el texto que se va a mostrar para cada opcion

        sltTipo1.appendChild(opcion);
    }
}

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
    if (inputNumero.value == '' || (regexSoloNumeros.test(inputNumero.value) == false) || Number(inputNumero.value) < Number(inputNumero.min)) {
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