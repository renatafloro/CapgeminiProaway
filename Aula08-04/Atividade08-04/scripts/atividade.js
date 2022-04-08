function montaNome(nome, sobrenome, idade){
    var msg = "maior"

    if(idade <18){
        msg = "menor"
    }   

    return `${nome} ${sobrenome}, você tem ${idade} anos, portanto você é ${msg} de idade.`
}