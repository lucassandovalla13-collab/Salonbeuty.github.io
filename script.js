// === EDITA ESTOS DATOS ===
const WHATSAPP_NUMERO = "56954602746"; // reemplaza con tu número real sin + ni espacios
const SALON_NOMBRE = "Salon Beuty";
const SALON_DIRECCION = "San Martin 2746, Temuco";
// ==========================

// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Botón WhatsApp
function abrirWhatsApp(texto = "Hola, quiero agendar una hora.") {
  const msg = encodeURIComponent(texto);
  window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${msg}`, "_blank");
}
document.getElementById("cta-whatsapp").addEventListener("click", e => { e.preventDefault(); abrirWhatsApp(); });
document.getElementById("whatsapp-float").addEventListener("click", e => { e.preventDefault(); abrirWhatsApp(); });

// Formulario a WhatsApp
document.getElementById("form-whatsapp").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value;
  const texto = `Hola, soy ${nombre}. Quiero reservar: ${servicio}. ${mensaje ? "Detalle: " + mensaje : ""}`;
  abrirWhatsApp(texto);
});

// Google Maps link
const mapsQuery = encodeURIComponent(`${SALON_NOMBRE} ${SALON_DIRECCION}`);
document.getElementById("maps-link").href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
