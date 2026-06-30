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
const badgesPorProducto = {

    "Espresso":"Más vendido",
    "Latte":"Recomendado",
    "Capuccino":"Favorito",
    "Mokaccino":"Nuevo",
    "Frappuccino":"Frío",
    "Té Chai":"Aromático",
    "Té de Manzanilla":"Relajante",
    "Té Negro":"Clásico",
    "Té de Frutos Rojos":"Dulce",
    "Cheesecake":"Especial",
    "Pie de Limón":"Artesanal",
    "Brownie":"Chocolate",
    "Croissant":"Recién horneado"

};

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

function agregarBadges(){

    const productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {

        const titulo = producto.querySelector("h3");

        if(!titulo){

            return;

        }

        const nombreProducto = titulo.textContent.trim();
        const etiqueta = badgesPorProducto[nombreProducto] || "Especial";
        const badge = document.createElement("span");

        badge.className = "producto-badge";
        badge.textContent = etiqueta;

        const imagen = producto.querySelector("img");

        if(imagen){

            producto.insertBefore(badge, imagen);

        }else{

            producto.prepend(badge);

        }

    });

}

//============================
// EVENTOS
//============================

formulario.addEventListener("submit", registrarSolicitud);

agregarBadges();