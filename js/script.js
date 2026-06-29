//============================
// ELEMENTOS DEL DOM
//============================

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const producto = document.getElementById("producto");
const comentario = document.getElementById("comentario");

const tablaSolicitudes = document.getElementById("tablaSolicitudes");

//============================
// FUNCIONES
//============================

function crearFila(nombreCliente, productoCliente, correoCliente){

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombreCliente}</td>
        <td>${productoCliente}</td>
        <td>${correoCliente}</td>
    `;

    tablaSolicitudes.appendChild(fila);

}

function limpiarFormulario(){

    formulario.reset();

}

function registrarSolicitud(event){

    event.preventDefault();

    if(nombre.value.trim()===""){

        alert("Ingrese un nombre.");

        return;

    }

    crearFila(

        nombre.value,

        producto.value,

        correo.value

    );

    limpiarFormulario();

}

//============================
// EVENTOS
//============================

formulario.addEventListener("submit", registrarSolicitud);