// Grille ambre + halo qui suivent le curseur (repris de enzo.bellenguez.fr)
const body = document.body;
let raf = null;

function move(e) {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    body.style.setProperty("--mx", e.clientX + "px");
    body.style.setProperty("--my", e.clientY + "px");
    raf = null;
  });
}

window.addEventListener("pointermove", (e) => {
  if (e.pointerType !== "mouse") return;
  body.classList.add("grid-hot");
  move(e);
});
window.addEventListener("pointerleave", () => body.classList.remove("grid-hot"));

// Menu mobile
const burger = document.getElementById("burger");
const menu = document.getElementById("mob-menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menu.setAttribute("aria-hidden", String(!open));
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
  })
);
