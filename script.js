const menu = document.getElementById("menu");
const ingredients = document.querySelectorAll(".ingredient");

// Clique no menu
menu.addEventListener("click", (e) => {
  // Se o menu ainda NÃO estiver aberto, abrimos e prevenimos o link
  if (!menu.classList.contains("open")) {
    e.preventDefault(); // impede o link inicial
    menu.classList.add("open"); // abre menu
    e.stopPropagation();
  }
  // Se já estiver aberto, o clique no link funciona normalmente
});

// Fecha menu ao clicar fora
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target)) {
    menu.classList.remove("open");
  }
});




// efeito de ocultar o icone de menu ao rolar a pagina para baixo

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const current = window.scrollY;
    const wrapper = document.querySelector(".menu-wrapper");

    if (current > lastScroll) {
        wrapper.style.transform = "translateY(-150px)";
    } else {
        wrapper.style.transform = "translateY(0)";
    }

    lastScroll = current;
});

window.addEventListener("scroll", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("small", window.scrollY > 100);
});
