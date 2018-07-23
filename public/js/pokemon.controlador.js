'use strict'
imprimirListaPokemones()
llenarTipos()

let btnRegistrar = document.querySelector('#btnRegistrar');
btnRegistrar.addEventListener('click', obtenerDatos);

let inputNumero = document.querySelector('#txtNum');
let inputNombre = document.querySelector('#txtNombre');
// let sltTipo1 = document.querySelector('#sltTipo1');
// let sltTipo2 = document.querySelector('#sltTipo2');
let inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', function () {
    imprimirListaPokemones(inputFiltro.value)
});

function obtenerDatos() {
    let infoPokemon = [];
    let bError = false;

    let nNum = inputNumero.value;
    let sNom = inputNombre.value;
    let slTipo1 = document.createElement('select');
    let slTipo2 = document.createElement('select');

    infoPokemon.push(nNum, sNom, slTipo1, slTipo2, imagenUrl);

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el pokemon',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
    } else {
        registrarPokemon(infoPokemon);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El pokemon se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });
        imprimirListaPokemones();
        limpiarFormulario();
    }
};

function imprimirListaPokemones() {
    let mlistaPokemones = obtenerListaPokemon();
    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mlistaPokemones.length; i++) {
        let fila = tbody.insertRow();
        let cNumero = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo1 = fila.insertCell();
        let cTipo2 = fila.insertCell();
        let cFoto = fila.insertCell();

        cNumero.innerHTML = mlistaPokemones[i]['numero'];
        cNombre.innerHTML = mlistaPokemones[i]['nombre'];
        cTipo1.innerHTML = mlistaPokemones[i]['tipo1'];
        cTipo2.innerHTML = mlistaPokemones[i]['tipo2'];
        cFoto.innerHTML = '<img src="' + mlistaPokemones[i]['foto'] + '">';

    }

};

function llenarTipos() {
    let Tipos = [
        { value: "BUG", text: "Bug" },
        { value: "Dark", text: "Dark" },
        { value: "Dragon", text: "Dragon" },
        { value: "Electric", text: "Electric" },
        { value: "Fairy", text: "Fairy" },
        { value: "Fighting", text: "Fighting" },
        { value: "Fire", text: "Fire" },
        { value: "Flying", text: "Flying" },
        { value: "Ghost", text: "Ghost" },
        { value: "Grass", text: "Grass" },
        { value: "Ground", text: "Ground" },
        { value: "Ice", text: "Ice" },
        { value: "Normal", text: "Normal" },
        { value: "Poison", text: "Poison" },
        { value: "Psychic", text: "Psychic" },
        { value: "Rock", text: "Rock" },
        { value: "Steel", text: "Steel" },
        { value: "Water", text: "Water" }
    ];

    let option = "";
    let il = Tipos.length;
    let sltTipo1 = document.querySelector('#sltTipo1');
    let sltTipo2 = document.querySelector('#sltTipo2');
    let inputFiltro = document.querySelector('#txtFiltro');

    for (let i = 0; i < il; i++) {
        option = document.createElement('option');
        option.setAttribute('value', Tipos[i].value);
        option.appendChild(document.createTextNode(Tipos[i].text));
        sltTipo1.appendChild(option);
    }

    for (let i = 0; i < il; i++) {
        option = document.createElement('option');
        option.setAttribute('value', Tipos[i].value);
        option.appendChild(document.createTextNode(Tipos[i].text));
        sltTipo2.appendChild(option);
    }
    for (let i = 0; i < il; i++) {
        option = document.createElement('option');
        option.setAttribute('value', Tipos[i].value);
        option.appendChild(document.createTextNode(Tipos[i].text));
        inputFiltro.appendChild(option);
    }
}

function filtrarDatos() {
    if (inputFiltro.value != null || inputFiltro.value != "") {
        let listaPokemones = filtrarPokemones("2", inputFiltro.value);
        let tbody = document.querySelector('#tblPokemon tbody');
        tbody.innerHTML = '';

        for (let i = 0; i < listaPokemones.length; i++) {
            let fila = tbody.insertRow();
            let cNumero = fila.insertCell();
            let cNombre = fila.insertCell();
            let cTipo1 = fila.insertCell();
            let cTipo2 = fila.insertCell();
            let cFoto = fila.insertCell();
            cNumero.innerHTML = listaPokemones[i]['numero'];
            cNombre.innerHTML = listaPokemones[i]['nombre'];
            cTipo1.innerHTML = listaPokemones[i]['tipo1'];
            cTipo2.innerHTML = listaPokemones[i]['tipo2'];
            cFoto.innerHTML = '<img src="' + listaPokemones[i]['foto'] + '">';

        }
    } else {
        imprimirListaPokemones();
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
    if (inputNumero.value == '' || (regexSoloNumeros.test(inputNumero.value) == false) || Number(inputNumero.value) < Number(inputNumero.min)) {
        inputNumero.classList.add('error_input');
        bError = true;
    } else {
        inputNumero.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario() {
    inputNumero.value = null;
    inputNombre.value = null;
    inputTipo1.value = "";
    inputTipo2.value = "";
    inputFoto.value = "";
}