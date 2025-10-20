var caixa = document.getElementById("caixa-flex"); //Guarda o valor do botao em Index.

function saudacao(){//Criação da função saudacao

  var texto_saudante = document.createElement('h1');
  texto_saudante.textContent = 'Seja muito bem-vindo!';
  caixa.appendChild(texto_saudante);
  
  setTimeout(function() {
    window.alert('Acabou, foi só isso.');
    texto_saudante.remove();
  }, 2000);
}
