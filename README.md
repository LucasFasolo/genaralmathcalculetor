# Calculadoras Matemáticas Interativas

## Objetivo do Site
O site foi criado como um trabalho de integração entre professores de Matemática e Desenvolvimento Web. O objetivo principal é disponibilizar **calculadoras de sistemas lineares 2x2 e 3x3** para uso em provas escolares pelos criadores e também para que outras pessoas possam aprender matemática de forma prática e mais visual.

O site permite que os usuários **entendam a lógica por trás dos cálculos**, não apenas vejam o resultado final.


## Lógica dos Cálculos em JavaScript

O site resolve **sistemas lineares** usando o **método de Cramer**, baseado em determinantes.

### 1. Sistema 2x2
Sistema:

a1*x + b1*y = c1
a2*x + b2*y = c2

**Passos do cálculo:**
1. Calcula o determinante principal:

detA = a1*b2 - a2*b1

2. Calcula os determinantes para cada variável:

detX = c1*b2 - c2*b1
detY = a1*c2 - a2*c1

3. Divide cada determinante pelo principal para encontrar as soluções:

X = detX / detA
Y = detY / detA

4. Se `detA` for zero, o sistema é **impossível ou indeterminado**.


### 2. Sistema 3x3
Sistema:

a1*x + b1*y + c1*z = d1
a2*x + b2*y + c2*z = d2
a3*x + b3*y + c3*z = d3

**Passos do cálculo:**
1. Calcula o determinante principal da matriz 3x3:

detA = a1*(b2*c3 - b3*c2) - b1*(a2*c3 - a3*c2) + c1*(a2*b3 - a3*b2)

2. Calcula os determinantes substituindo a coluna correspondente pelos resultados:

detX = d1*(b2*c3 - b3*c2) - b1*(d2*c3 - d3*c2) + c1*(d2*b3 - d3*b2)
detY = a1*(d2*c3 - d3*c2) - d1*(a2*c3 - a3*c2) + c1*(a2*d3 - a3*d2)
detZ = a1*(b2*d3 - b3*d2) - b1*(a2*d3 - a3*d2) + d1*(a2*b3 - a3*b2)

3. Divide cada determinante pelo principal:

X = detX / detA
Y = detY / detA
Z = detZ / detA


4. Se `detA` for zero, o sistema é **impossível ou indeterminado**.

**Observações:**  
- O JavaScript pega os valores digitados, converte para número, calcula determinantes e divide para obter as variáveis.  
- O resultado final é mostrado diretamente na tela para facilitar o aprendizado.


## Passo a Passo de Uso

1. O usuário escolhe se quer resolver um sistema 2x2 ou 3x3.
2. Preenche os campos com os valores das equações.
3. Clica no botão para calcular.
4. O site mostra o resultado de cada variável ou indica se o sistema não tem solução.

**Exemplo numérico 2x2:**

2x + 3y = 8
1x + 2y = 5
detA = 2*2 - 1*3 = 1
detX = 8*2 - 5*3 = 1
detY = 2*5 - 1*8 = 2
X = detX / detA = 1 / 1 = 1
Y = detY / detA = 2 / 1 = 2

**Exemplo numérico 3x3:**

x + y + z = 6
2x - y + z = 3
x + 2y - z = 3
detA = 1*( -1*-1 - 1*2 ) - 1*(2*-1 - 1*1) + 1*(2*2 - -1*1) = 6
detX = 6*( -1*-1 - 1*2 ) - 1*(3*-1 - 3*1) + 1*(3*2 - 3*-1) = 6
X = detX / detA = 6 / 6 = 1
(continua para Y e Z)

## Desafios

- Aceitar símbolos matemáticos complexos, como raízes, potências e frações.
- Garantir responsividade para dispositivos menores, como celulares e tablets.
- Criar uma interface intuitiva para diferentes tipos de calculadoras (3x3, 3x2, etc.).

## Limitações
 
- Não resolve sistemas não-lineares.  
- Sistemas com determinante zero são tratados como **sem solução ou infinitas soluções**, sem detalhar qual é o caso específico.

## Ideias Futuras

- Adicionar suporte a mais tipos de cálculos matemáticos envolvendo  matrizes como multiplicação de matrizes, matriz inversa etc.
- Criar uma seção de tutoriais mais interativos para ensinar os conceitos por trás dos cálculos.
- Implementar uma verificação dos dados inseridos mais rigorosa e explicativa.
- Adicionar personalização de temas para melhorar a experiência do usuário.

## Integrantes e Papéis

| Nome | Papel |
|------|-------|
| Ray Gomes Pereira | Desenvolvimento do front-end (HTML, CSS e Bootstrap) e programação em JavaScript para funcionalidades visuais do site |
| Nicolas Boechat dos Santos | Desenvolvimento do front-end e elaboração da apresentação do projeto |
| Carlos Eduardo de Oliveira Barbosa | Programação em JavaScript, implementação da lógica dos cálculos e auxílio na elaboração da apresentação |
| Lucas Menezes Fasolo | Programação em JavaScript e implementação da lógica dos cálculos |
| Ian Motta Ferreira | Programação em JavaScript, validação e controle de entrada de dados, além de auxiliar na criação e conduzir a apresentação |


Este projeto foi feito com o objetivo de **aprender matemática de forma interativa** e **aplicar conhecimentos de desenvolvimento web**, integrando teoria e prática.
