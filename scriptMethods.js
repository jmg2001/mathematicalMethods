document.addEventListener("DOMContentLoaded", function() {
    // Ocultar todos los enlaces iniciales (después del segundo)
    var allLinks = document.querySelectorAll(".method-column a");
    for (var i = 22; i < allLinks.length; i++) {
        allLinks[i].style.display = "none";
    }

    // Función para mostrar más enlaces
    function mostrarMasEnlaces() {
        for (var i = 2; i < allLinks.length; i++) {
            allLinks[i].style.display = "block";
        }
        document.getElementById("verMasBtn").style.display = "none";
        document.getElementById("homeBtn").style.display = "block";
    }

    // Agregar evento clic al botón "Ver más"
    document.getElementById("verMasBtn").addEventListener("click", mostrarMasEnlaces);
});