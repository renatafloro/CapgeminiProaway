class Pessoa{
    constructor(nome,contato){
        this.nome= nome
        this.contato= contato
    }

    display(){
        console.log(`Nome:${this.nome} Contato:${this.contato}`)
    }
}

let Pessoa1 = new Pessoa('Ana',"Ana@email.com")
//Pessoa1.display()

//Cria a classe filha de pessoa

class PessoaFisica extends Pessoa{
    constructor(Pessoa,cpf){
        //Constructor(nome, contato, cpf)
        //super(nome, contato)
        super(Pessoa);
        this.cpf= cpf
    }

    show(){
        this.display();
        console.log(`cpf${this.cpf}`)
    }

    display(){
        console.log(`Nome ${this.nome}, contato ${this.contato}}, cpf ${this.cpf}`)
    }
}

//let pf1= new PessoaFisica('12345678910')
//pf1.show()

let pf2= new PessoaFisica('Maria','maria@email.com','12345678925')
//pf2.display()

class PessoaJuridica extends Pessoa{
    constructor(Pessoa,cnpj){
        super(Pessoa);
        this.cnpj= cnpj
    }
    display(){
        console.log(`Pessoa Juridica: Nome:${this.nome} contato:${this.contato} cnpj ${this.cnpj}`)
    }
}
    let pj1= new PessoaJuridica('mercado livre','mercado@email.com', '13165675888797');
    pj1.display()