// Revisão: métodos de array — map, filter, find, reduce

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 4.2 },
  { nome: "Carla", nota: 9.1 },
  { nome: "Diego", nota: 5.8 },
  { nome: "Elis", nota: 6.9 },
];

// map: transforma cada item, gerando um novo array
const situacao = alunos.map((aluno) => ({
  nome: aluno.nome,
  situacao: aluno.nota >= 6 ? "aprovado" : "recuperação",
}));

// filter: mantém apenas os itens que passam na condição
const aprovados = alunos.filter((aluno) => aluno.nota >= 6);

// find: retorna o primeiro item que satisfaz a condição (ou undefined)
const melhorNotaAcimaDe9 = alunos.find((aluno) => aluno.nota >= 9);

// reduce: acumula os valores em um único resultado
const media = alunos.reduce((soma, aluno) => soma + aluno.nota, 0) / alunos.length;

console.log("Situação de cada aluno:", situacao);
console.log("Aprovados:", aprovados);
console.log("Primeiro com nota >= 9:", melhorNotaAcimaDe9);
console.log("Média da turma:", media.toFixed(2));
