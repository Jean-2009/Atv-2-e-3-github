# Calculadora de Função Quadrática

Projeto web feito para a **Atividade 2 de Git/GitHub** — um repositório com
um projeto de disciplina anterior (matemática), incluindo `README.md` e
`.gitignore` configurados.

## Sobre

Calculadora e visualizador gráfico de funções do 2º grau
(f(x) = ax² + bx + c), no estilo de um quadro-negro. O usuário informa os
coeficientes **a**, **b** e **c**, e a página calcula:

- Discriminante (Δ);
- Raízes reais (quando existem);
- Vértice da parábola;
- Concavidade (para cima ou para baixo);

... e desenha o gráfico correspondente em um `<canvas>`.

## Estrutura de pastas

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── .gitignore
└── README.md
```

## Como usar

Abra `index.html` no navegador, informe os coeficientes e clique em
"Calcular". Não há dependências externas além de fontes do Google Fonts.

## Tecnologias

- HTML5 + `<canvas>`
- CSS3
- JavaScript puro (sem frameworks)
