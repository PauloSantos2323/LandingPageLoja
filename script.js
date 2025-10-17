// Menu responsivo
const menuToggle = document.getElementById("menu-toggle");
const navUl = document.querySelector("header nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Formulário de contato (exemplo)
const form = document.getElementById("form-contato");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  form.reset();
});
