const TELEFONE_WHATS = "5531993012916";

function comprarAgora() {
  const mensagem = encodeURIComponent(
    "Olá! Vi o site do sabão sustentável e quero comprar."
  );

  window.open(
    `https://wa.me/${TELEFONE_WHATS}?text=${mensagem}`,
    "_blank"
  );
}

/* Animação ao rolar a página */
const elementosReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

elementosReveal.forEach((elemento) => {
  observer.observe(elemento);
});

