// Revisão: classes e constructor

class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.extrato = [];
  }

  depositar(valor) {
    if (valor <= 0) {
      throw new Error("O valor do depósito deve ser positivo.");
    }
    this.saldo += valor;
    this.extrato.push(`Depósito de R$ ${valor.toFixed(2)}`);
    return this.saldo;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente.");
    }
    this.saldo -= valor;
    this.extrato.push(`Saque de R$ ${valor.toFixed(2)}`);
    return this.saldo;
  }

  verSaldo() {
    return `Saldo de ${this.titular}: R$ ${this.saldo.toFixed(2)}`;
  }
}

if (require.main === module) {
  const conta = new ContaBancaria("Ana", 100);
  conta.depositar(50);
  conta.sacar(30);

  console.log(conta.verSaldo());
  console.log("Extrato:", conta.extrato);
}

module.exports = ContaBancaria;
