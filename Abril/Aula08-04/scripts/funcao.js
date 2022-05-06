function ola(){
    console.log('Hello')
}

function oi(nome){
    alert(`Olá ${nome}`)
}

function validaIdade(idade){
if(idade <18){
    console.log("Você é menor de idade")
} else {
    console.log("Você é maior de idade")
}

function retornaSituacao(media){
    let situacao = "aprovado"
    if (media <7) {
        situacao= "Reprovado"
    } 
    return situacao
}

function retornaReprovado(media){
    return media <7
}

ola()
validaIdade(25)

var retorno = retornaSituacao(8)
console.log(retorno)

var retornoBooleano = retornaReprovado(6)
console.log(retornoBooleano)
}
