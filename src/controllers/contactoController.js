
let telArg = "432432423"

let contactoController = {
    mensaje: (req,res) => {
        res.render('contacto',{
            numero: telArg
        });
    }
}

module.exports = contactoController