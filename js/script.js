// Número de WhatsApp del negocio (con código de país, sin + ni espacios)
const WHATSAPP_NUMBER = "593980403997";

// Menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  // Abre o cierra el menú al hacer clic en el botón
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cierra el menú al elegir un enlace
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Formulario de contacto -> arma un mensaje y lo abre en WhatsApp
  const form = document.getElementById("order-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nombre = form.nombre.value.trim();
      const producto = form.producto.value;
      const detalles = form.detalles.value.trim();

      const mensaje =
        `Hola, soy ${nombre || "una persona interesada"}.\n` +
        `Me interesa: ${producto}.\n` +
        (detalles ? `Detalles: ${detalles}` : "Quisiera más información.");

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank", "noopener");
    });
  }
});
