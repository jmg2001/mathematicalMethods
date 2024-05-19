// Obtener los parámetros de la URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        valorN: params.get("filter1"),
        integral: params.get("filter2"),
        uniformes: params.get("filter3")
    };
}

document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar más enlaces
    function mostrarMasEnlaces() {
        for (var i = 22; i < allLinks.length; i++) {
            allLinks[i].style.display = "block";
        }
        document.getElementById("verMasBtn").style.display = "none";
        document.getElementById("homeBtn").style.display = "block";
    }

    function home(){
        // Redirigir a la nueva URL
        window.location.href = "index.html";
    }
    document.getElementById("homeBtn").addEventListener("click", home);

    // Ocultar todos los enlaces iniciales (después del segundo)
    var allLinks = document.querySelectorAll(".method-column a");

    var params = getUrlParams();

    console.log(params);

    if(params.valorN == null){
        // document.getElementById("homeBtn").style.display = "none";


        for (var i = 22; i < allLinks.length; i++) {
            allLinks[i].style.display = "none";
        }
    
        // Agregar evento clic al botón "Ver más"
        document.getElementById("verMasBtn").addEventListener("click", mostrarMasEnlaces);
        

    }else{

        // var columns = document.querySelectorAll(".method-column");
        // for (var i = 0; i < columns.length; i++) {
        //     columns[i].style.display = "flex";
        // }

        for (var i = 0; i < allLinks.length; i++) {
            allLinks[i].style.display = "none";
        }

        var links;

        document.getElementById("verMasBtn").style.display = "none";

        if(params.valorN == "sin_N"){
            
        }else{
            links = document.querySelectorAll(".category-4");
            for (var i = 0; i < links.length; i++) {
                links[i].style.display = "block";
            }
        }
    }    
});