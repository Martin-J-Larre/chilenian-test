const checkOrigin = (req, res, next) => { 
    ///// token
    // const token = req.headers.authorization.split(' ').pop()
    // if (token === '123456') {
    //     next()
    // } else {
    //     res.status(409)
    //     res.send({ error: 'Tu por aquí no pasas!'})
    // }
    // Origin
    console.log(req.headers)
    next()
}
module.exports = checkOrigin;