let express = require ('express')

let router = express.Router();  

router.get('/:idProducto',function(req,res){
    res.send("Detalles del producto " + req.params.idProducto)
})

router.use('/:idProducto/comentarios/:idComentario?', function(req,res){
    if (req.params.idComentario === undefined) {
        res.send("Comentarios del producto" + req.params.idProducto)
    } else {
        res.send("Bienvenido a los comentarios del producto " + req.params.idProducto +
            ". Usted se encuentra enfocado en el comentario" +req.params.idComentario
        )
    }
})

module.exports = router;