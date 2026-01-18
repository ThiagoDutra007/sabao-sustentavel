const TELEFONE_WHATS = "5531995737137"; // número correto (sem traços ou espaços)

function contatoWhats() {
    const mensagem = encodeURIComponent(
        "Olá! Vi o site do sabão sustentável e gostaria de saber mais sobre a assinatura."
    );
    window.location.href = `https://wa.me/${TELEFONE_WHATS}?text=${mensagem}`;
}

function pagamentoPix() {
    alert(
        "Chave Pix: seuemail@pix.com.br\n\n" +
        "Após o pagamento, envie o comprovante pelo WhatsApp."
    );
}

