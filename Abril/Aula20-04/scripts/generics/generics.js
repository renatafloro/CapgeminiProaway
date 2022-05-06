"use strict";
class Contato {
    constructor(nome, fone) {
        this.nome = nome;
        this.fone = fone;
    }
}
function testeGenerics(x) {
    return x;
}
//<T> é uma referencia, q pode ser string, number...
//console.log(testeGenerics<string>("Ola"))
//console.log(testeGenerics<number>(125))
//let ct= new Contato('ana','12345');
//console.log(testeGenerics<Contato>(ct))
function lista(n1, n2) {
    let x = [n1, n2];
    return x;
}
console.log(lista('maria', 'maria@email'));
function listaComIdade(p1, p2, p3) {
    console.log(`${p1} ${p2} ${p3}`);
}
listaComIdade('ana', 27, false);
listaComIdade(10, false, "Lucas");
listaComIdade('julia', 75, [1, 2, 3, 4]);
