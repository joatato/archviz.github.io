const exteriores = [
    "1.png",
    "2.png",
    "3.webp",
    "4.heic"

];
const interiores = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "CURSO JACOBSEN 1 - (2000x2000).png",
    //"ESCALERA ESPIRAL 1.727.png",
    //"ESCALERA RECTA 2.jpg",
    "INTERIOR NICO.580.png",
    "INTERIOR NICO.581.png",
];

const fotoMontages = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg"
]

var imagePaths = [];

function filterImages(category) {
    document.getElementById("portfolioContainer").scrollLeft = 0;
    document.querySelectorAll('.category-buttons button').forEach(btn => {
        btn.style.backgroundColor = ''; // Limpiar el color de fondo
    });
    document.getElementById(category).style.backgroundColor = '#0d1321';
    switch (category) {
        case "interiores":
            imagePaths = interiores;
            break;
        case "fotoMontages":
            imagePaths = fotoMontages;
            break;
        case "exteriores":
            imagePaths = exteriores;
            break;
        default:
            imagePaths = imageModel3D;
            break;
    }
    generatePortfolioItems(category);
}

// Función para generar elementos de imagen dinámicamente
function generatePortfolioItems(category) {
    const portfolioContainer = document.getElementById("portfolioContainer");

    // Limpiar el contenedor antes de agregar nuevas imágenes
    portfolioContainer.innerHTML = "";

    imagePaths.forEach((path) => {
        let html = ``
        if (category == "animaciones") {
            html = `
                <div class="portfolio-item">
                    <video src="./files/proyects/${category}/${path}" alt="3D Design" autoplay loop>
                </div>
            `;
        } else {
            html = `
                <div class="portfolio-item">
                    <img src="./files/proyects/${category}/${path}" alt="3D Design">
                </div>
            `;
        }

        // Crear un elemento div temporal para convertir la cadena HTML en nodos DOM
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // Agregar los nodos DOM al contenedor de portafolio
        portfolioContainer.appendChild(tempDiv.firstElementChild);
    });
}

// Llama a la función para generar las imágenes
filterImages("fotoMontages")




//LECTURA DE BOTONES CON EVENTLISTENER xd todo porque no funciona llamar a una funcion
// onclick="filterImages()"
document.getElementById('exteriores').addEventListener('click', function () {
    filterImages('exteriores');
});
document.getElementById('interiores').addEventListener('click', function () {
    filterImages('interiores');
});
document.getElementById('fotoMontages').addEventListener('click', function () {
    filterImages('fotoMontages');
});