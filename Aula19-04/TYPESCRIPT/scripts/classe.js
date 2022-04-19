"use strict";
class Pessoa {
    constructor(id, nome, fone, email) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }
    display() {
        console.log(`
       Id: ${this.id}
       Nome: ${this.nome}
       Fone: ${this.fone}
       Email: ${this.email}
    `);
    }
}
let cd = new Pessoa(10, 'maria', '123', 'maria@email.com');
console.log(cd);
