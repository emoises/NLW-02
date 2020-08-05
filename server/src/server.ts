import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    console.log("acessou a rota")
})

app.listen(3333)