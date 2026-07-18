# MATEMÁQUINA EXTERMATRIZADORA

Calculadora interativa de **determinantes** e **sistemas lineares** (2x2 e 3x3) usando a Regra de Cramer.

> Projeto de integração entre Matemática e Desenvolvimento Web.

---

## Funcionalidades

- Cálculo de **determinantes** de matrizes 2x2 e 3x3
- Resolução de **sistemas lineares** 2x2 e 3x3 (Regra de Cramer)
- Suporte a símbolos matemáticos: `√`, `^`, `log`, `ln`, `sen`, `cos`, `tg`
- Alternância entre tema claro e escuro
- Interface responsiva (desktop e mobile)

---

## Estrutura do Projeto

```
├── index.html       # Página principal
├── css/
│   └── style.css    # Estilos personalizados
├── js/
│   └── app.js       # Lógica dos cálculos e interações
├── img/             # Imagens e ícones
│   ├── config.png
│   ├── info.png
│   ├── reset.png
│   └── simb.png
└── README.md
```

---

## Como Usar

1. Abra o `index.html` no navegador
2. Escolha entre as abas **Determinante** ou **Sistema Linear**
3. Selecione o tamanho da matriz (2x2 ou 3x3)
4. Preencha os valores (aceita números e símbolos: `√16`, `2^3`, `log10`, etc.)
5. Clique em **Calcular**

---

## Lógica dos Cálculos

### Determinante 2x2

```
detA = a·d − b·c
```

### Determinante 3x3 (Regra de Sarrus)

```
detA = a·e·i + b·f·g + c·d·h − c·e·g − b·d·i − a·f·h
```

### Sistema Linear (Regra de Cramer)

As variáveis são encontradas dividindo determinantes parciais pelo determinante principal:

```
X = detX / detA
Y = detY / detA
Z = detZ / detA   (para 3x3)
```

Se `detA = 0`, o sistema é **impossível** ou **indeterminado**.

---

## Exemplo (2x2)

```
2x + 3y = 8
 x + 2y = 5

detA = 2·2 − 1·3 = 1
detX = 8·2 − 5·3 = 1
detY = 2·5 − 1·8 = 2

X = 1/1 = 1
Y = 2/1 = 2
```

---

## Limitações

- Não resolve sistemas não-lineares
- Determinante zero é tratado como "sem solução/infinitas soluções" sem diferenciar os casos
- Expressões com múltiplos símbolos consecutivos podem não ser interpretadas corretamente

---

## Integrantes

| Nome | Papel |
|------|-------|
| Ray Gomes Pereira | Front-end (HTML, CSS, Bootstrap) e JS visual |
| Nicolas Boechat dos Santos | Front-end e apresentação |
| Carlos Eduardo de Oliveira Barbosa | Lógica dos cálculos em JS e apresentação |
| Lucas Menezes Fasolo | Lógica dos cálculos em JS |
| Ian Motta Ferreira | Validação de dados e apresentação |
