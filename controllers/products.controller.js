const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../db/productos.json')

const leerProductos = () => {
    const data = fs.readFileSync(filePath, 'utf8')
    console.log("productos", data);

    return JSON.parse(data) 
}

let productos = leerProductos()

console.log("productos", productos)

/* app.get('/productos', (req, res) => {
    res.json({ data: productos, status: 200, message: 'Productos obtenidos de manera exitosa' })
}) */

const getProducts = (req, res) => {
    res.json({ data: productos, status: 200, message: 'Productos obtenidos de manera exitosa' })
}


/* app.get('/productos/:id', (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if(!producto) return res.json( {status: 404, message: 'Producto no enconrado'})

    res.json({data: producto, status: 200, message: 'Producto encontrado'})
}) */

const getProductById = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if(!producto) return res.json( {status: 404, message: 'Producto no enconrado'})

    res.json({data: producto, status: 200, message: 'Producto encontrado'})
}

/* app.post('/productos', (req, res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length + 1
    productos.push(nuevoProducto)

    res.json({ status: 201, data: nuevoProducto, message: 'Producto creado con exito' })
}) */

const createProduct = (req, res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length + 1
    productos.push(nuevoProducto)

    res.json({ status: 201, data: nuevoProducto, message: 'Producto creado con exito' })
}

/* app.put('/productos/:id',(req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    const {nombre, precio} = req.body   
    producto.nombre = nombre || producto.nombre
    producto.precio = precio || producto.precio

    res.json({ status:201, message: 'producto editado exitosamente'})
} ) */

const updateProduct = (req, res) => {
    const producto = productos.find(item => item.id === parseInt(req.params.id))
    if(!producto) return res.json( {status: 404, message: 'Producto no enconrado'})

    const {nombre, precio} = req.body   
    producto.nombre = nombre || producto.nombre
    producto.precio = precio || producto.precio

    res.json({ status:201, message: 'producto editado exitosamente'})
} 

/* app.delete('/productos/:id',(req, res) => {
    let producto = productos.find(item => item.id !== parseInt(req.params.id))
    if(!producto) return res.json( {status: 404, message: 'Producto no enconrado'})

    productos = productos.filter(item => item.id !== producto.id)

    res.json({status:201, message: 'producto eliminado con exito'})
}) */

const deleteProduct = (req, res) => {
    let producto = productos.find(item => item.id !== parseInt(req.params.id))
    if(!producto) return res.json( {status: 404, message: 'Producto no enconrado'})

    productos = productos.filter(item => item.id !== producto.id)

    res.json({status:201, message: 'producto eliminado con exito'})
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}