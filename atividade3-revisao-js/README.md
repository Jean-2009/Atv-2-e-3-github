# Revisão — Prova de JavaScript (Técnicas e Linguagens de Programação)

Repositório feito para a **Atividade 3 de Git/GitHub** — uma atividade da
disciplina deste semestre — com exercícios de revisão para a prova de DP
de JavaScript, incluindo `README.md` e `.gitignore` configurados.

## Tópicos cobertos

Cada arquivo em `exercicios/` cobre um dos assuntos da prova:

| Arquivo | Tópico |
|---|---|
| `01-arrays.js` | Métodos de array: `map`, `filter`, `find`, `reduce` |
| `02-classes.js` | Classes e `constructor` |
| `03-try-catch.js` | Tratamento de erros com `try/catch/finally` |
| `04-async-await.js` | `async/await` com `fs/promises` |

## Estrutura de pastas

```
.
├── exercicios/
│   ├── 01-arrays.js
│   ├── 02-classes.js
│   ├── 03-try-catch.js
│   └── 04-async-await.js
├── dados/
│   └── alunos.json
├── .gitignore
└── README.md
```

## Como rodar

Requer apenas o Node.js instalado (sem dependências externas):

```bash
node exercicios/01-arrays.js
node exercicios/02-classes.js
node exercicios/03-try-catch.js
node exercicios/04-async-await.js
```

O último exercício lê `dados/alunos.json` e gera
`dados/saida-gerada.json` (esse arquivo de saída fica fora do controle de
versão, conforme configurado no `.gitignore`).
