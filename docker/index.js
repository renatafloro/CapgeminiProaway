const express = require('express')
const app = express()
const pg = require('pg')
const { database, password } = require('pg/lib/defaults')

const HOST = "0.0.0.0"
const PORT = "8080"

listaClientes = [
    {
        nome: 'Ana',
        fone: '123',
        email: 'ana@gmail.com'
    },
    {
        nome: 'Joao',
        fone: '456',
        email: 'joao@gmail.com'
    },
    {
        nome: 'Pedro',
        fone: '789',
        email: 'pedro@gmail.com'
    }
]

const pool = new pg.Pool({
    user: 'postgres',
    password: 'admin',
    database: 'postgres',
    host: 'meubanco',
    port: 5432
})

app.get('/conectar', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            res.status(401).send({
                mensagem: "Conexação não permitida",
                erro: err.message
            })
        }
        res.status(200).send({
            mensagem: 'conectado'
        })
    })
})

app.get('/', (req, res) => {
    res.status(200).send({ mensagem: "ola mundo" })
})

app.get('/clientes', (req, res)=>{
    res.status(200).send(listaClientes)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na url http://${HOST}:${PORT}`)
})