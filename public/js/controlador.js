'use strict'

let btnRegistrar = document.querySelector('#btnRegistrar');
let inputNumero = document.querySelector('#txtNum');
let inputNombre = document.querySelector('#txtNombre');
let sltTipo1 = document.getElementsByName('#sltTipo');
let sltTipo2 = document.getElementsByName('#sltTipo2');

btnRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    let nNum = inputNumero.value;
    let sNom = inputNombre.value;
    let slTipo1 = sltTipo1.value;
    let slTipo2 = sltTipo2.value;

    console.log(nNum,sNom,slTipo1,slTipo2);
};