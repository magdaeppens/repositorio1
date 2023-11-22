function zoomIn(elementId) {
    var element = document.getElementById(elementId);
    element.style.transform = "scale(0.9)";
}

function zoomOut(elementId) {
    var element = document.getElementById(elementId);
    element.style.transform = "scale(1)"; 
}

function ChequeoTelefono() {
    var telefono = document.getElementById("telefono").value;
    if (!/^\d{10}$/.test(telefono)) {
        if (!/^\d+$/.test(telefono)) {
            document.getElementById("mensajeTelefono").textContent = "Por favor, ingrese solo números.";} 
            else {
            document.getElementById("mensajeTelefono").textContent = "El número no es válido. Vuelva a escribir.";}
        return false;
    } else {
        document.getElementById("mensajeTelefono").textContent = "";
        return true;
    }
}

function redirigirAMenu() {
    window.location.href = "menu_pedido.html";
}

function iniciarPedido() {
    var telefonoValido = ChequeoTelefono();
    if (telefonoValido) {
        redirigirAMenu();
    }
}

function agregarAlCarrito(event, cantidad) {
    var producto = event.target.closest('.card');
    var nombre = producto.querySelector('.card-title').textContent;
    var precio = parseFloat(producto.querySelector('.precios li').textContent.slice(1));
    var nuevoItemCarrito = document.createElement('li');
    nuevoItemCarrito.textContent = nombre + ' - $' + (precio * cantidad).toFixed(2) + ' x ' + cantidad + ' unidades';
    document.getElementById('lista-carrito').appendChild(nuevoItemCarrito);
    actualizarTotalCarrito(precio * cantidad);
}

function actualizarTotalCarrito(precio) {
    var totalCarrito = parseFloat(document.getElementById('total-carrito').textContent);
    totalCarrito += precio;
    document.getElementById('total-carrito').textContent = totalCarrito.toFixed(2);
}

function agregarEventosDeCompra() {
    var selectoresCantidad = document.querySelectorAll('.cantidad-selector');
    var botonesCompra = document.querySelectorAll('.productos1 button, .productos2 button, .productos3 button');

    botonesCompra.forEach(function (boton, index) {
        boton.addEventListener('click', function (evento) {
            var cantidadSeleccionada = parseInt(selectoresCantidad[index].value);
            agregarAlCarrito(evento, cantidadSeleccionada);
        });
    });
}
document.addEventListener('DOMContentLoaded', agregarEventosDeCompra);

function cancelarPedidos() {
    var listaCarrito = document.getElementById("lista-carrito");
    var totalCarrito = document.getElementById("total-carrito");
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    totalCarrito.textContent = "0";
}

function pagar() {
    window.location.href = "pagar.html";
}

function pedidoRealizado() {
    alert("Pedido realizado con éxito");
}