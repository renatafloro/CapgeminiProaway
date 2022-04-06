function onSubmit(){
    var email = document.getElementsByTagName("input")[0];
    var nome = document.getElementsByTagName("input")[1];
    var idade = document.getElementsByTagName("input")[2];
    var credito = document.getElementsByTagName("input")[3];
    var imagem = document.getElementsByTagName("input")[4];
    var rua = document.getElementsByTagName("input")[5];
    var cidade = document.getElementsByTagName("input")[6];
    var bairro = document.getElementsByTagName("input")[7];
    var cep = document.getElementsByTagName("input")[8];
 
   
    if(email.value === ""){
        alert("Informe email");
        email.focus();
        return;
    }
   
    if(nome.value === ""){
        alert("Informe nome");
        nome.focus();
        return;
    }
   
    if(idade.value === ""){
        alert("Informe a idade");
        idade.focus();
        return;
    }
    
    if(credito.value === ""){
        alert("Informe seu limite de crédito");
        credito.focus();
        return;
    }
   
    if(imagem.value === ""){
        alert("Envie a imagem");
        imagem.focus();
        return;
    }
    if(rua.value === ""){
        alert("Informe a rua");
        rua.focus();
        return;
    }
    if(cidade.value === ""){
        alert("Informe a cidade");
        cidade.focus();
        return;
    }
    if(bairro.value === ""){
        alert("Informe o bairro");
        bairro.focus();
        return;
    }
    if(cep.value === ""){
        alert("Informe o CEP");
        cep.focus();
        return;
    }
      document.getElementsByTagName("form")[0].submit();
}