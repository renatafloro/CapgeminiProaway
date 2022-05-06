const express = require('express')
const app = express()
const port = 8081

var rotasProduto = require('./rotasProduto')
var rotasCliente = require('./rotasCliente')

app.use('/produtos', rotasProduto)
app.use('/clientes'. rotasCliente)

app.listen(port, () => console.log('aplicação em execução'))