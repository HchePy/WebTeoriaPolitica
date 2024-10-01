// Recuperar contadores de localStorage al cargar la página
let likeCount = localStorage.getItem("likeCount") ? parseInt(localStorage.getItem("likeCount")) : 0;
let dislikeCount = localStorage.getItem("dislikeCount") ? parseInt(localStorage.getItem("dislikeCount")) : 0;

// Actualizar el DOM con los valores iniciales
document.getElementById("like-count").innerText = likeCount;
document.getElementById("dislike-count").innerText = dislikeCount;

// Manejar el evento del botón de "like"
document.getElementById("like-button").addEventListener("click", function() {
    likeCount++;
    document.getElementById("like-count").innerText = likeCount;
    localStorage.setItem("likeCount", likeCount); // Guardar en localStorage
});

// Manejar el evento del botón de "dislike"
document.getElementById("dislike-button").addEventListener("click", function() {
    dislikeCount++;
    document.getElementById("dislike-count").innerText = dislikeCount;
    localStorage.setItem("dislikeCount", dislikeCount); // Guardar en localStorage
});

