class Contato{
    nome: string;
    fone: string;

    constructor(nome: string, fone: string){
        this.nome=nome;
        this.fone=fone
    }
}

function testeGenerics<T>(x:T):T{
    return x;
}
//<T> é uma referencia, q pode ser string, number...

//console.log(testeGenerics<string>("Ola"))
//console.log(testeGenerics<number>(125))

//let ct= new Contato('ana','12345');
//console.log(testeGenerics<Contato>(ct))

function lista<T>(n1: T, n2:T): T[]{
    let x: T[]= [n1, n2]
    return x;
}

console.log(lista<string>('maria', 'maria@email'))

function listaComIdade<T,U, Z>(p1: T, p2: U, p3:Z): void {
    console.log(`${p1} ${p2} ${p3}`)
}

listaComIdade<string, number, boolean>('ana',27, false);

listaComIdade<number, boolean, string>(10, false, "Lucas");

listaComIdade<string, number, number[]>('julia', 75, [1, 2, 3, 4])