// Função para girar o cartão
function viraCartao(event) {
    const cartao = event.currentTarget;
    cartao.classList.toggle('virado');
}

// Selecionar todos os cartões
const cartoes = document.querySelectorAll('.cartao');

// Adicionar o evento de clique para cada cartão
cartoes.forEach(cartao => {
    cartao.addEventListener('click', viraCartao);
});
