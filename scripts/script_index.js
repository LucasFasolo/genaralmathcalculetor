// ===== Alternar abas =====
const botoesAbas = document.querySelectorAll('.botao-aba'); // todos os botões de aba
const conteudosAbas = document.querySelectorAll('.conteudo-aba'); // todas as abas de conteúdo
const botoesResposta = document.querySelectorAll('.caixa-resultado'); // todas as caixas de resposta
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
  if(tamanhoMatriz.value == '2') {
    inputs2x2.classList.remove('d-none');
    inputs3x3.classList.add('d-none');
  } else {
    inputs2x2.classList.add('d-none');
    inputs3x3.classList.remove('d-none');
  }
});



// Seleciona o select do tamanho do sistema
const tamanhoSistema = document.getElementById('tamanho-sistema');
// Seleciona os containers das matrizes
const inputs2x2Sistema = document.getElementById('inputs-2x2-sistema');
const inputs3x3Sistema = document.getElementById('inputs-3x3-sistema');

// Adiciona evento de mudança no select
tamanhoSistema.addEventListener('change', () => {
  if (tamanhoSistema.value === '2') {
    inputs2x2Sistema.classList.remove('d-none'); // mostra 2x2
    inputs3x3Sistema.classList.add('d-none');    // esconde 3x3
  } else {
    inputs2x2Sistema.classList.add('d-none');    // esconde 2x2
    inputs3x3Sistema.classList.remove('d-none'); // mostra 3x3
  }
});
const botaoTema = document.getElementById('botao-tema');
const root = document.documentElement;

// Função para aplicar o tema
function aplicarTema(tema) {
  if (tema === 'claro') {
    root.style.setProperty('--cor-fundo', '#FDF5F5');
    root.style.setProperty('--cor-texto', '#2B0A0A');
    root.style.setProperty('--cor-texto-secundaria', '#FFFFFF');
    root.style.setProperty('--cor-fundo-input', '#FFFFFF');
    root.style.setProperty('--cor-caixa-fundo', 'rgba(255, 245, 245, 0.9)');
    root.style.setProperty('--cor-container-sistema', 'rgba(255, 245, 245, 0.85)');
    root.style.setProperty('--cor-display', 'rgba(255, 180, 180, 0.2)');
    botaoTema.textContent = 'Tema Escuro';
  } else {
    root.style.setProperty('--cor-fundo', '#0A0A0A');
    root.style.setProperty('--cor-texto', '#E6DEFF');
    root.style.setProperty('--cor-texto-secundaria', '#FFFFFF');
    root.style.setProperty('--cor-fundo-input', '#121212');
    root.style.setProperty('--cor-caixa-fundo', 'rgba(18, 18, 18, 0.85)');
    root.style.setProperty('--cor-container-sistema', 'rgba(18, 18, 18, 0.75)');
    root.style.setProperty('--cor-display', 'rgba(180, 100, 100, 0.1)');
    botaoTema.textContent = 'Tema Claro';
  }
  // Salva o tema atual
  localStorage.setItem('tema', tema);
}

// Quando carregar a página, aplica o tema salvo (ou escuro como padrão)
const temaSalvo = localStorage.getItem('tema') || 'escuro';
aplicarTema(temaSalvo);

// Ao clicar, alterna o tema
botaoTema.addEventListener('click', () => {
  const temaAtual = localStorage.getItem('tema') === 'claro' ? 'escuro' : 'claro';
  aplicarTema(temaAtual);
});

function det2(A11, A12, A21, A22) {
  return A11*A22-A12*A21;
}

function det3(A11, A12, A13, A21, A22, A23, A31, A32, A33) {
  let first = A11 * det2(A22, A23, A32, A33);
  let second = A12 * det2(A21, A23, A31, A33);
  let third = A13 * det2(A21, A22, A31, A32)

  return first - second + third;
}



let button_sis=document.getElementById("Button_sis");
let res_sis2x2= document.getElementById("sis2x2")
let res_sis3x3 = document.getElementById("sis3x3")

button_sis.addEventListener("click", () => {
  let x;
  let y;
  let z;

  if (tamanhoSistema.value == 2) {
    let Da11 = String(document.getElementById("2a11").value);
    let Da12 = String(document.getElementById("2a12").value);
    let Db1  = String(document.getElementById("2b1").value);
    let Da21 = String(document.getElementById("2a21").value);
    let Da22 = String(document.getElementById("2a22").value);
    let Db2  = String(document.getElementById("2b2").value);
    

    

    let simbolos = ['√', '^', "log", "/"]; //Lista de símbolos para equações
    let valores_para_traducao = []; //lista dos números que serão convertidos
    valores_para_traducao.push(Da11, Da12, Db1, Da21, Da22, Db2); //Adiciona os valores das variáveis a serem traduzidos


    for (let i = 0; i < valores_para_traducao.length; i++) { //itera todos os valores que deverão ser conferidos
      for (let s of simbolos) { //considera s como todos os símbolos da lista
        if (valores_para_traducao[i].includes(s)) { // então se o valor sendo conferido possuir "s" (vulgo qualquer símbolo)

          // 8 ^ 2
          let partes = valores_para_traducao[i].split(simbolos[s]); //divide a string em duas partes (antes e depois do símbolo)
          let partes_float = partes.map(x => parseFloat(x)); //passa a mesma lista inteira para float
          
          valores_para_traducao[i] = Number(partes[0]) //converte o valor da esquerda para inteiro (já que a maioria dos números do user vem na direita)
          
          if(s == simbolos[0]){
            valores_para_traducao[i] = partes_float[1] ** 0.5; //Finalmente define o valor que está sendo conferido sendo igual à respectiva equação
          }

          else if(s == simbolos[1]){
            valores_para_traducao[i] = partes_float[0] ** partes_float[1]
          }

          else if(s == simbolos[2]){
            valores_para_traducao[i] = Math.log10(partes_float[0]) 
          }

          else if(s == simbolos[3]){
            valores_para_traducao[i] = partes_float[0] / partes_float[1];
          }
          console.log(`O campo ${i+1} contém o símbolo: ${s}`);
      }

      else{
        valores_para_traducao[i] = valores_para_traducao[i];
      }
    }
  }



    if (det2(Da11,Da12,Da21,Da22)===0){
      if ((Da11/Da21)==(Db1/Db2)){
        res_sis.innerHTML= "Resultado: Infinito";
      }
      else{
        res_sis.innerHTML= "Resultado: Esses numeros estão errados";
      }
      
    }
    else{
    x=det2(Db1,Da12,Db2,Da22)/det2(Da11,Da12,Da21,Da22)
    y=det2(Da11,Db1,Da21,Db2)/det2(Da11,Da12,Da21,Da22)

    res_sis.innerHTML= "Resultado: ("+ x + "," + y + ")";
    }
  } 
  else {
    let Ta11 = Number(document.getElementById("3a11").value);
    let Ta12 = Number(document.getElementById("3a12").value);
    let Ta13 = Number(document.getElementById("3a13").value);
    let Tb1  = Number(document.getElementById("3b1").value);
    let Ta21 = Number(document.getElementById("3a21").value);
    let Ta22 = Number(document.getElementById("3a22").value);
    let Ta23 = Number(document.getElementById("3a23").value);
    let Tb2  = Number(document.getElementById("3b2").value);
    let Ta31 = Number(document.getElementById("3a31").value);
    let Ta32 = Number(document.getElementById("3a32").value);
    let Ta33 = Number(document.getElementById("3a33").value);
    let Tb3  = Number(document.getElementById("3b3").value);
    if (det3(Ta11,Ta12,Ta13,Ta21,Ta22,Ta23,Ta31,Ta32,Ta33)===0){
      if ((Da11/Da21)==(Db1/Db2) || (Da11/Da31)==(Db1/Db3) || (Da21/Da31)==(Db2/Db3)){
        res_sis.innerHTML= "Resultado: Infinito";
      }
      else{
        res_sis.innerHTML= "Resultado: Esses numeros estão errados";
      }
      
    }
    else{
    x=det3(Tb1,Ta12,Ta13,Tb2,Ta22,Ta23,Tb3,Ta32,Ta33)/det3(Ta11,Ta12,Ta13,Ta21,Ta22,Ta23,Ta31,Ta32,Ta33)
    y=det3(Ta11,Tb1,Ta13,Ta21,Tb2,Ta23,Ta31,Tb3,Ta33)/det3(Ta11,Ta12,Ta13,Ta21,Ta22,Ta23,Ta31,Ta32,Ta33)
    z=det3(Ta11,Ta12,Tb1,Ta21,Ta22,Tb2,Ta31,Ta32,Tb3)/det3(Ta11,Ta12,Ta13,Ta21,Ta22,Ta23,Ta31,Ta32,Ta33)

    res_sis3x3.innerHTML= "Resultado: ("+ x + "," + y + ","+ z + ")";
    }
  }
  
  
})

let resetSis = document.getElementById("resetarSis")
let resetDet = document.getElementById("resetarDet")

resetSis.addEventListener("click", () => {
  if (tamanhoSistema.value == 2) {
    document.getElementById("2a11").value = null;
    document.getElementById("2a12").value = null;
    document.getElementById("2b1").value = null;
    document.getElementById("2a21").value = null;
    document.getElementById("2a22").value = null;
    document.getElementById("2b2").value = null;
  } else {
    document.getElementById("3a11").value = null;
    document.getElementById("3a12").value = null;
    document.getElementById("3a13").value = null;
    document.getElementById("3a21").value = null;
    document.getElementById("3a22").value = null;
    document.getElementById("3a23").value = null;
    document.getElementById("3a31").value = null;
    document.getElementById("3a32").value = null;
    document.getElementById("3a33").value = null;
    document.getElementById("3b1").value = null;
    document.getElementById("3b2").value = null;
    document.getElementById("3b3").value = null;
  }
})

resetDet.addEventListener("click", () => {
  if (tamanhoMatriz.value == 2) {
    document.getElementById("2A11").value = null;
    document.getElementById("2A12").value = null;
    document.getElementById("2A21").value = null;
    document.getElementById("2A22").value = null;
  } else {
    document.getElementById("3A11").value = null;
    document.getElementById("3A12").value = null;
    document.getElementById("3A13").value = null;
    document.getElementById("3A21").value = null;
    document.getElementById("3A22").value = null;
    document.getElementById("3A23").value = null;
    document.getElementById("3A31").value = null;
    document.getElementById("3A32").value = null;
    document.getElementById("3A33").value = null;
  }
})

let button_det = document.getElementById("button_det");
let res = document.getElementById("det");

button_det.addEventListener("click", () => {
  let det;
  if (tamanhoMatriz.value == 2) {
    let DA11 = Number(document.getElementById("2A11").value);
    let DA12 = Number(document.getElementById("2A12").value);
    let DA21 = Number(document.getElementById("2A21").value);
    let DA22 = Number(document.getElementById("2A22").value);
    det = det2(DA11, DA12, DA21, DA22);
  } else {
    let TA11 = Number(document.getElementById("3A11").value);
    let TA12 = Number(document.getElementById("3A12").value);
    let TA13 = Number(document.getElementById("3A13").value);
    let TA21 = Number(document.getElementById("3A21").value);
    let TA22 = Number(document.getElementById("3A22").value);
    let TA23 = Number(document.getElementById("3A23").value);
    let TA31 = Number(document.getElementById("3A31").value);
    let TA32 = Number(document.getElementById("3A32").value);
    let TA33 = Number(document.getElementById("3A33").value);
    det = det3(TA11, TA12, TA13, TA21, TA22, TA23, TA31, TA32, TA33);
  }
  
  res.innerHTML= "Resultado: "+det;
})

document.querySelectorAll('input').forEach(input => {
  input.setAttribute('autocomplete', 'off');
});
