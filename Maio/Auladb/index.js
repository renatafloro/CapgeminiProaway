const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false}))
app.use(express.json());


var pg = require('pg')
var consString = "postgres://dtedmxwewcrmwr:096dd94a16475297b95ca1af47113ba02aae9e8f6594c491a906949660435a33@ec2-3-224-164-189.compute-1.amazonaws.com:5432/d8k0dmkhamp84u"

const pool = new pg.Pool({connectionString: consString, ssl: { rejectUnauthorized:false }})
app.get('/', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('Não foi possível conectar')
        }
        res.status(200).send('Conectado com sucesso')
    })
})

/*create table usuario
(email varchar(50),
senha varchar(200)
perfil varchar(15))*/

app.get('/criartabelausuario', (req, res) =>{
    pool.connect((err,client) => {
        if (err) {
            return res.status(401).send('Conexão não autorizada')
        }
        var sql= 'create table usuarios (email varchar(50), senha varchar(200), perfil varchar(15))'
        client.query (sql, (error, result) =>{
            if(error){
                return res.status(401).send('Conexão não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})

//err= erro client= transporte entre a aplicação e o servidor query= método que submete um comando sql para o banco de dados
//inserir dados: insert into nomedatabela()
app.post('/usuarios',(req, res) => {
    pool.connect((err, client) =>{
        if(err){
            return res.status(401).send("Conexão não autorizada")
        }
        var sql= 'insert into usuarios(email, senha, perfil) values ($1, $2, $3)'
        client.query(sql, [req.body.email, req.body.senha, req.body.perfil], (error, result) =>{
            if(error){
                return res.status(403).send('Operação não permitida')
            }
            res.status(201).send(result.rows)
        })
    })
})

app.get('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if(err){
            res.status(401).send("Conexão não autorizada")
        }
        client.query('select * from usuarios', (error, result) =>{
            if(error){
                res.status(401).send('Operação não autorizada')
            }
            res.status(200).send(result.rows)
        })
    })
})


app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))