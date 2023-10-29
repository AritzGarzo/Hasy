window.onload = function() {
    carrusel();
    let logo = document.getElementById("logo-mini").addEventListener("click", home);
    let subfiltros = document.getElementsByClassName("subfiltro").addEventListener("click", filtrar);

}

var usuario = "";
var nombre = "";
var correo = "";
var telefono = "";
var contrasena = "";

function home() {
    window.location.href = "index.html";
}

function filtrar() {
    
}

function carrusel() {
    const images = document.querySelectorAll('#carrusel img');
    let currentImage = 0;

    function nextImage() {
        images[currentImage].classList.remove('visible');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('visible');
    }

    setInterval(nextImage, 5000); // Cambiar de imagen cada 2 segundos
}

// function abrirPopUpSucces() {
//     document.getElementById("modalSuccess").style.display = "flex";
// }

// function cerrarPopUpSuccess() {
//     document.getElementById("modalSuccess").style.display = "none";
// }

// function abrirPopUpError() {
//     document.getElementById("modalError").style.display = "flex";
// }

// function cerrarPopUpError() {
//     document.getElementById("modalError").style.display = "none";
// }