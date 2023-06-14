

function rutaGet (req, res) {
    res.send("Ruta get")
}

function rutaPost (req, res) {
    res.send("Ruta post")
}

function rutaPut (req, res) {
    res.send("Ruta put")
}

function rutaDelete (req, res) {
    res.send("Ruta delete")
}

module.exports= {
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete
}