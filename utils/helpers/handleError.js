const httpError = (res, err) => { 
    console.log("Error", err);
    res.status(500)
    res.send({ error: 'Ocurrio un error' })
}

module.export = { httpError }