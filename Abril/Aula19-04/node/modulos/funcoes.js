//funcao anonima
var soma = function(n1,n2){
    return n1+n2
}
//Arrow function
var subtracao= (n1,n2) => {return n1-n2}

//tratamento de excessao dentro do try
function multiplicacao(n1,n2){
    try{
        if((n1 === undefined) | (n2 === undefined)){
            throw "Informe um valor valido para n1 e n2"
        }
    }catch(err){
        return err
    }return n1*n2
} 

function divisao(n1,n2){
    try{
        if((n1 === undefined)| (n2===undefined)){
            throw 'n1 e n2 devem ser informados'
        }
        if(n2=== 0){
            throw 'o divisor nao dever ser 0'
        }
    }
    catch(err){
        return err

    }
    return n1/n2
} 

module.exports= {soma, subtracao, multiplicacao, divisao}