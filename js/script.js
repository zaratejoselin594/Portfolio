let progress = document.querySelector(".contenedor-progreso")

window.onload = function () {
  setTimeout(() => {
    progress.removeAttribute("class", "barraProgress")
    progress.setAttribute("class", "contenedor-progreso")
  }, 3000);
};