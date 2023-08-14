const express = require ('express')
const productosRutas = require('./src/routes/Productos.js')
let ContactoRutas = require('./src/routes/Contacto') 

const app = express()

//configuración EJS



app.set('views', __dirname +'/src/views')
app.set('view engine','ejs')
app.use(express.static('/src/public'))

//Rutas
app.get('/',function(req,res){
    res.render('index')
})

app.get('/contacto',ContactoRutas)

app.use('/productos',productosRutas)



app.listen(4000, ()=>{
    console.log("App corriendo el puerto 4000");
})