const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.status(200).send('Pagina principal de consulta de produtos')
})

router.get('/:idproduto', (req, res) => {
    let idproduto = req.params.idproduto
    res.status(200).send({
        idselecionado: idproduto
    })
})

router.post('/', (req,res)=>{
    res.status(200)
})