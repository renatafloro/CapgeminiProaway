var http = require('http')
var meumodulo= require('./modulos/funcoes')


http.createServer(function(req,res) {
    //end: método de resposta, só usado uma vez, sendo o último
    //write: Pode ser usado mais vezes
    res.writeHead(200, {'Content-Type':'text/html'});

    res.write('<h1>Testando função soma</h1>')
    res.write(`100+50= ${meumodulo.soma(100,50)}`)
    res.write('<br>')

    res.write('<h1>Testando função subtracao</h1>')
    res.write(`100-50= ${meumodulo.subtracao(100,50)}`)
    res.write('<br>')

    res.write('<h1>Testando função multiplicacao</h1>')
    res.write(`5*50= ${meumodulo.multiplicacao(5,50)}`)
    res.write('<br>')

    res.write('<h1>Testando função divisão</h1>')
    res.write(`100/20= ${meumodulo.divisao(100,0)}`)
    res.write('<br>')

    res.end();  
}).listen(8080)
console.log('servidor rodando')