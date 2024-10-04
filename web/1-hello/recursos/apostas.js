const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

let Apostas = []

router.get('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < Apostas.length; i++) {
        const aposta = Apostas[i]
        if (aposta.id === id) {
            res.send(aposta)
            return
        }
    }
    res.status(404).send('aposta não encontrado!')
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < Apostas.length; i++) {
        const aposta = Apostas[i]
        if (aposta.id === id) {
            Apostas.splice(i, 1)
            res.send(aposta)
            return
        }
    }
    res.status(404).send('aposta não encontrado!')
})


router.put('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < Apostas.length; i++) {
        const aposta = Apostas[i]
        if (aposta.id === id) {
            const { idCliente, valor, evento } = req.body
            aposta.idCliente = idCliente
            aposta.valor = valor
            aposta.evento = evento
            res.send(aposta)
            return
        }
    }
    res.status(404).send('aposta não encontrado!')
})


router.post('/', (req, res) => {
    const { idCliente, valor, evento } = req.body
    const aposta = {
        id: uuidv4(),
        idCliente,
        valor,
        evento
    }
    Apostas.push(aposta)
    res.send(aposta)
})

module.exports = router