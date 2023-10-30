window.onload = function() {
    carrusel();
    let logo = document.getElementById("logo-mini").addEventListener("click", home);
    // Obtener los botones de filtro y subfiltro
    const filtroButtons = document.querySelectorAll('[data-filter]');
    const subfiltroButtons = document.querySelectorAll('.subfiltro');
    const productos = document.querySelectorAll('.card');

    // Agregar eventos a los botones de filtro y subfiltro
    filtroButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filtro = button.getAttribute('data-filter');
            filtrarProductos(filtro);
        });
    });

    subfiltroButtons.forEach(subfiltro => {
        subfiltro.addEventListener('click', () => {
            const filtro = subfiltro.getAttribute('data-filter');
            filtrarProductos(filtro);
        });
    });

    // Función para filtrar productos
    function filtrarProductos(filtro) {
        productos.forEach(producto => {
            const categoria = producto.getAttribute('data-categoria');
            if (filtro === 'todo' || filtro === categoria) {
                producto.classList.remove("hidden");
            } else {
                // producto.style.display = 'none';
                producto.classList.add("hidden");
            }
        });
    }

}

function home() {
    window.location.href = "../index.html";
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