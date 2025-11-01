// ===== Alternar abas =====
const botoesAbas = document.querySelectorAll('.botao-aba'); // todos os botões de aba
const conteudosAbas = document.querySelectorAll('.conteudo-aba'); // todas as abas de conteúdo

botoesAbas.forEach(botao => {
  botao.addEventListener('click', () => {

    // Remove ativo de todas as abas(percorre todas as abas)
    botoesAbas.forEach(b => b.classList.remove('ativo'));
    // Esconde todos os conteúdos(percorre todos os conteúdos)
    conteudosAbas.forEach(c => c.classList.add('d-none'));

    // Ativa a aba clicada
    botao.classList.add('ativo');
    const alvo = document.querySelector(botao.dataset.alvo);
    alvo.classList.remove('d-none');
  });
});

// ===== Alternar inputs da matriz determinante =====
const tamanhoMatriz = document.getElementById('tamanho-matriz');
const inputs2x2 = document.getElementById('inputs-2x2');
const inputs3x3 = document.getElementById('inputs-3x3');

tamanhoMatriz.addEventListener('change', () => {
  if(tamanhoMatriz.value === '2') {
    inputs2x2.classList.remove('d-none');
    inputs3x3.classList.add('d-none');
  } else {
    inputs2x2.classList.add('d-none');
    inputs3x3.classList.remove('d-none');
  }
});

// ===== Calculadora visual =====
// Apenas mostra o botão clicado no display (sem cálculo funcional)
const botoesCalculadora = document.querySelectorAll('.botoes-calculadora button');
const displayCalculadora = document.getElementById('display-calculadora');

botoesCalculadora.forEach(botao => {
  botao.addEventListener('click', () => {
    displayCalculadora.textContent = botao.textContent;
  });
});
