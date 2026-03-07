<<<<<<< HEAD
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

=======
const TELEFONE_WHATS = "5531993012916"; // número correto, sem traços ou espaços

const LINK_PLANOS = "https://invoice.infinitepay.io/plans/alex-caldeira-4o3/78RsRylb1X";

function contatoWhats() {
  const mensagem = encodeURIComponent(
    "Olá! Vi o site do sabão sustentável e gostaria de saber mais sobre a assinatura."
  );
  window.location.href = `https://wa.me/${TELEFONE_WHATS}?text=${mensagem}`;
}

function abrirPlanos() {
  // abre em nova aba
  window.open(LINK_PLANOS, "_blank", "noopener,noreferrer");
}


>>>>>>> e35e3b267862dcb6a59465f895669da30d084812
