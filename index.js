const express = require('express')
const cors = require('cors')
const app = express()

const port = 3000
app.use(cors())
app.use(express.json())


/* app.get('/bienvenida', (req, res) => {
    res.send('Bienvenido al sistema')
})

app.post('/saludo', (req, res) => {
    const { nombre } = req.body 

    res.json({ mensaje: `Hola ${nombre}, bienvenido a la api`, status: 200 })
}) */

const productRouter = require ('./routes/products.routes')

app.use('/productos', productRouter)

app.listen(port, () => {
    console.log(`servidor corriendo en localhost:${port}`)
})