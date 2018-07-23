'use strict'
imprimirListaEntrenador()

let btnRegistrar = document.querySelector('#btnRegistrar');
btnRegistrar.addEventListener('click', obtenerDatos);

let inputNumero = document.querySelector('#txtNum');
let inputNombre = document.querySelector('#txtNombre');
let inputEdad = document.querySelector('#txtEdad');
let inputsGenero = document.querySelectorAll('input[type=radio]');

let inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', imprimirListaEntrenador);

function obtenerDatos() {
    let infoEntrenador = [];
    let bError = false;

    let nNum = inputNumero.value;
    let sNom = inputNombre.value;
    let nEdad = inputEdad.value;
    let sTipo = '';
    for (let i = 0; i < inputsGenero.length; i++) {
        if (inputsGenero[i].checked == true) {
            sTipo = JSON.parse(inputsGenero[i].value); // convierte el texto a boolean
        }
    }

    infoEntrenador.push(nNum, sNom, nEdad, sTipo);

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

function imprimirListaEntrenador() {
    let mlistaEntrenador = obtenerListaEntrenador();
    let tbody = document.querySelector('#tblEntrenador tbody');
    tbody.innerHTML = '';
    let sFiltro = document.querySelector('#txtFiltro').value;

    if (sFiltro == '') {
        mlistaEntrenador = obtenerListaEntrenador();
    } else {
        mlistaEntrenador = obtenerListaEntrenadorFiltrado(sFiltro);
    }

    for (let i = 0; i < mlistaEntrenador.length; i++) {
        let fila = tbody.insertRow();

        let cCant = fila.insertCell();
        let cNombre = fila.insertCell();
        let cEdad = fila.insertCell();
        let colGenero = fila.insertCell();
        let cFoto = fila.insertCell();

        let imagen = document.createElement('img');
        imagen.src = listaPersonas[i]['foto'];
        imagen.classList.add('imageSettings');
        cFoto.appendChild(imagen);

        
        let sGenero = '';
        if (mListaProductos[i]['genero'] == true) {
            sGenero = 'Femenino';
        } else {
            sGenero = 'Masculino';
        }
        colGenero.innerHTML = sGenero;

        cCant.innerHTML = mlistaEntrenador[i]['numero'];
        cNombre.innerHTML = mlistaEntrenador[i]['nombre'];
        cEdad.innerHTML = listaEntrenador[i]['edad'];
        colGenero.innerHTML = listaEntrenador[i]['genero'];
        cFoto.innerHTML = listaEntrenador[i]['foto']
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
    //Validación del numero
    if (inputNumero.value == '' || (regexSoloNumeros.test(inputNumero.value) == false) || Number(inputNumero.value) < Number(inputNumero.min)) {
        inputNumero.classList.add('error_input');
        bError = true;
    } else {
        inputNumero.classList.remove('error_input');
    }
    //Validación de la edad
    if (inputEdad.value == '' || (regexSoloNumeros.test(inputEdad.value) == false) || Number(inputEdad.value) < Number(inputEdad.min) || Number(inputEdad.value) > Number(inputEdad.max)) {
        inputEdad.classList.add('error_input');
        bError = true;
    } else {
        inputEdad.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario() {
    inputNombre.value = '';
    inputNumero.value = 0;
}