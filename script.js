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


