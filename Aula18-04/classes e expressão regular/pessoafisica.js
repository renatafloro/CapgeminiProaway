class PessoaFisica{
    constructor(nome, cpf){
        this.nome=nome
        this._cpf=cpf
        //"_" diz que é private
    }
    
    get cpf(){
        return this._cpf
    }

    set cpf(value){
        if(value.length == 14)
        this._cpf=value
        else
           console.log('cpf invalido')
    }
  
}

let p1= new PessoaFisica()
p1.cpf='703.047.031-10'
console.log(p1.cpf)