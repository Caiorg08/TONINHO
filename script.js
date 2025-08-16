document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let servico = document.getElementById('servico').value;
    let data = document.getElementById('data').value;
    let mensagem = document.getElementById('mensagem').value;

    let texto = `Olá, meu nome é ${nome}. Quero agendar o serviço: ${servico} para o dia ${data}. ${mensagem}`;
    let url = `https://wa.me/5531999717678?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});
