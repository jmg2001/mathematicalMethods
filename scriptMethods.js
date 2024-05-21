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
        document.getElementById("backBtn").style.display = "none";
        document.getElementById("homeBtn").style.display = "block";
    }

    function home(){
        // Redirigir a la nueva URL
        window.location.href = "index.html";
    }

    function back(){
        // Redirigir a la nueva URL
        window.location.href = "filter.html";
    }

    document.getElementById("homeBtn").addEventListener("click", home);
    document.getElementById("backBtn").addEventListener("click", back);

    document.getElementById("verMasBtn").addEventListener("click", mostrarMasEnlaces);

    // Ocultar todos los enlaces iniciales (después del segundo)
    var allLinks = document.querySelectorAll(".method-column a");

    var params = getUrlParams();

    console.log(params);

    if(params.valorN == null){

        for (var i = 22; i < allLinks.length; i++) {
            allLinks[i].style.display = "none";
        }

        document.getElementById("verMasBtn").style.display = "block";
        document.getElementById("backBtn").style.display = "none";
        document.getElementById("homeBtn").style.display = "none";

    }else{

        for (var i = 0; i < allLinks.length; i++) {
            allLinks[i].style.display = "none";
        }

        var links;

        document.getElementById("verMasBtn").style.display = "none";
        document.getElementById("backBtn").style.display = "block";


        if(params.valorN == "sin_N"){
            if(params.valorN == "uniforme"){
                links = document.querySelectorAll(".category-7");
                for (var i = 0; i < links.length; i++) {
                    links[i].style.display = "block";
                }
            }else{
                links = document.querySelectorAll(".category-8");
                for (var i = 0; i < links.length; i++) {
                    links[i].style.display = "block";
                }
            }
            
        }else{
            if(params.valorN == "par"){
                if (params.integral == "si"){
                    links = document.querySelectorAll(".category-1");
                    for (var i = 0; i < links.length; i++) {
                        links[i].style.display = "block";
                    }
                }else{
                    links = document.querySelectorAll(".category-2");
                    for (var i = 0; i < links.length; i++) {
                        links[i].style.display = "block";
                    }
                }
            }

            if(params.valorN == "impar"){
                if (params.integral == "si"){
                    links = document.querySelectorAll(".category-3");
                    for (var i = 0; i < links.length; i++) {
                        links[i].style.display = "block";
                    }
                }else{
                    links = document.querySelectorAll(".category-4");
                    for (var i = 0; i < links.length; i++) {
                        links[i].style.display = "block";
                    }
                }
            }

            if(params.valorN == "parEimpar"){
                if (params.integral == "si"){
                    links = document.querySelectorAll(".category-5");
                    for (var i = 0; i < links.length; i++) {
                        links[i].style.display = "block";
                    }
                }else{
                    links = document.querySelectorAll(".category-6");
                    for (var i = 0; i < links.length; i++) {
                        links[i].style.display = "block";
                    }
                }
            }
            
        }
    }    
});