//============================
// ELEMENTOS DEL DOM
//============================

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");

const correo = document.getElementById("correo");

const telefono = document.getElementById("telefono");

const producto = document.getElementById("producto");

const comentario = document.getElementById("comentario");

const tabla = document.getElementById("tablaSolicitudes");

//============================
// EVENTO DEL FORMULARIO
//============================

formulario.addEventListener("submit", function(event){

    event.preventDefault();

});

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const fila = document.createElement("tr");

    fila.innerHTML = `

        <td>${nombre.value}</td>

        <td>${producto.value}</td>

        <td>${correo.value}</td>

    `;

    tabla.appendChild(fila);

    formulario.reset();

});

