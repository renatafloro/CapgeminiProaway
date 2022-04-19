function teste(n1, n2){
    try {
        if (n2 == 0){
            throw "Não é possível dividir por zero"
        } else {
            let x = n1/n2
        }
    } catch (err){
        console.log(`Erro:${err} `)
    }
}

function pegaDadosArray(){
    let a = [1,2,3,4,5,6]
    try{
        if(i>= a.length){
            throw "Indice de array invalido"
        }
        let x=a[i]
        console.log(x)
    }catch (err){
        console.log(err)
    }
}

pegaDadosArray()