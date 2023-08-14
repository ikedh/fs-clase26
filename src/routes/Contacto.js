let express = require('express')
let router = express.Router()

let contactoController = require('../controllers/contactoController')

router.get('/contacto',contactoController.mensaje)

module.exports=router