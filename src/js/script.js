const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        selecionarBotao(botao);
        mudarImagens(indice);
    })
})

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotao(botao){
    botao.classList.add('selecionado');
}

function mudarImagens(indice){
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');

    imagens[indice].classList.add('ativa');
}
