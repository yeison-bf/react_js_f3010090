require('dotenv').config()
const express = require('express')
const app = express()
const sequalize = require('./config/db')

const port = process.env.PORT;
app.use(express.json());

// Modelos del proyecto
const products = require('./models/products.models')


// Sincroización con la base de datos 
sequalize.sync()



// Rutas del proyecto
const routeProduct = require('./routers/products.routers');
app.get('/', (req, res) => {res.json({"saludo":'Hello World!'})})
app.use('/products',routeProduct)



// Ejecución del servidor
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
