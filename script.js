
let card = document.querySelectorAll(".card");
card.forEach(card => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;
    card.style.setProperty('--x', x + 'px')
    card.style.setProperty('--y', y + 'px')
  }
})

// Cierre del menú al tocar fuera
const menuCheckbox = document.getElementById('menu');
const navLinks = document.querySelectorAll('.hrUlRve a');
const body = document.body;

body.addEventListener('click', (event) => {
  if (!event.target.closest('.hrNavBarRve') && !event.target.closest('.hrUlRve')) {
    menuCheckbox.checked = false;
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuCheckbox.checked = false;
  });
});