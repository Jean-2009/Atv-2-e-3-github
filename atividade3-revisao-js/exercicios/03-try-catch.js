// Revisão: try/catch

const ContaBancaria = require("./02-classes.js");

function tentarSacar(conta, valor) {
  try {
    conta.sacar(valor);
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
  } catch (erro) {
    console.log(`Não foi possível sacar: ${erro.message}`);
  } finally {
    console.log(`Saldo atual: R$ ${conta.saldo.toFixed(2)}`);
  }
}

const conta = new ContaBancaria("Bruno", 200);

tentarSacar(conta, 50);   // deve funcionar
tentarSacar(conta, 500);  // deve cair no catch (saldo insuficiente)

// Outro exemplo clássico de try/catch: JSON inválido
function lerConfiguracao(textoJson) {
  try {
    return JSON.parse(textoJson);
  } catch (erro) {
    console.log("JSON inválido, usando configuração padrão.");
    return { tema: "padrao" };
  }
}

console.log(lerConfiguracao('{"tema": "escuro"}'));
console.log(lerConfiguracao("{ isso não é json }"));
