function contatoWhats() {
    const telefone = "55319573-7137"; // coloque o número real
    const mensagem = encodeURIComponent(
        "Olá! Quero saber mais sobre a assinatura do sabão sustentável."
    );
    window.location.href = `https://wa.me/${telefone}?text=${mensagem}`;
}

function pagamentoPix() {
    alert(
        "Chave Pix: seuemail@pix.com.br\n\n" +
        "Após o pagamento, envie o comprovante pelo WhatsApp."
    );
}
