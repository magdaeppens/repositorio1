function zoomIn(elementId) {
    var element = document.getElementById(elementId);
    element.style.transform = "scale(1.2)";
}

function zoomOut(elementId) {
    var element = document.getElementById(elementId);
    element.style.transform = "scale(1.0)"; 
}


function ChequeoTelefono() {
    var telefono = document.getElementById("telefono").value;
    if (!/^\d{10}$/.test(telefono)) {
        if (!/^\d+$/.test(telefono)) {
            document.getElementById("mensajeTelefono").textContent = "Por favor, ingrese solo números.";
        } else {
            document.getElementById("mensajeTelefono").textContent = "El número no es válido. Vuelva a escribir.";
        }
    } else {
        document.getElementById("mensajeTelefono").textContent = "";
    }
}
