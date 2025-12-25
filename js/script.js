let razones = [];

const texto = document.getElementById("razon");
const btn = document.getElementById("btnRazon");
const img = document.getElementById("imagen");
const card = document.getElementById("card");

fetch("data/razones.json")
    .then(response => response.json())
    .then(data => {
        razones = data.razones;
    })
    .catch(error => {
        console.error("Error al cargar las razones:", error);
    });

btn.addEventListener("click", () => {
    if (razones.length === 0) {
        texto.innerText = "Cargando razones...";
        return;
    }

    const indice = Math.floor(Math.random() * razones.length);
    texto.innerText = razones[indice].texto;
    img.src = razones[indice].imagen;

    // animación de tarjeta
    card.classList.add("open");
    setTimeout(() => {
        card.classList.remove("open");
    }, 600);
});
