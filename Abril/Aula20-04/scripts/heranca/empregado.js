"use strict";
class Empregado {
    constructor(empCode, empName, empFone) {
        this.empCode = empCode;
        this.empName = empName;
        this.empFone = empFone;
    }
    getSalary(salario) {
        return salario;
    }
    getManagerName(nome) {
        return nome;
    }
    salvar() {
        return true;
    }
    alterar(objeto) {
        return true;
    }
    consultar() {
        let x = [];
        return x;
    }
    consultarPorId(id) {
        return 'maria';
    }
    excluir(id) {
        //
    }
}
