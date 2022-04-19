class Pessoa{
    id: number;
    nome: string;
    fone: string;
    email: string

    constructor(id:number, nome:string,fone: string, email:string){
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email= email
    }
display(): void{
    console.log(`
       Id: ${this.id}
       Nome: ${this.nome}
       Fone: ${this.fone}
       Email: ${this.email}
    `)
}
}

let cd = new Pessoa(10,'maria','123','maria@email.com')
console.log(cd)