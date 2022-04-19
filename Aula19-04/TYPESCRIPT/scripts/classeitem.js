"use strict";
class Itens {
    constructor(descricao, preco, qtde) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }
    totalItem() {
        return this.qtde * this.preco;
    }
    valorDesconto(taxa) {
        return this.totalItem() * (taxa / 100);
    }
    display(taxa) {
        console.log(`
            Descrição: ${this.descricao}
            Preço: ${this.preco}
            Quantidade: ${this.qtde}
            Subtotal: ${this.totalItem()}
            R$ desconto: ${this.valorDesconto(taxa)}
            R$ pago: ${this.totalItem() - this.valorDesconto(taxa)}
        `);
    }
}
let item1 = new Itens('Computador', 2000, 2);
item1.display(10);
