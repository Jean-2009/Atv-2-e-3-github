// Revisão: async/await com fs/promises

const fs = require("fs/promises");
const path = require("path");

const CAMINHO_ENTRADA = path.join(__dirname, "..", "dados", "alunos.json");
const CAMINHO_SAIDA = path.join(__dirname, "..", "dados", "saida-gerada.json");

async function lerAlunos() {
  const conteudo = await fs.readFile(CAMINHO_ENTRADA, "utf-8");
  return JSON.parse(conteudo);
}

async function gerarRelatorio() {
  try {
    const alunos = await lerAlunos();

    const relatorio = alunos.map((aluno) => ({
      nome: aluno.nome,
      situacao: aluno.nota >= 6 ? "aprovado" : "recuperação",
    }));

    await fs.writeFile(CAMINHO_SAIDA, JSON.stringify(relatorio, null, 2), "utf-8");

    console.log("Relatório gerado com sucesso em dados/saida-gerada.json");
    console.log(relatorio);
  } catch (erro) {
    console.log("Erro ao gerar relatório:", erro.message);
  }
}

gerarRelatorio();
