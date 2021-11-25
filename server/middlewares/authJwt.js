const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')

const verifyToken = (req, res, next) => {
    let token = req.headers['x-oauth-token']

    if (!token) {
        return res.status(403).send({message: 'No token. Unauthorized.'})
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: "Unauthorized"})
        }
        req.userId = decoded.id
        req.role = decoded.role
        next()
    })
}

const authJwt = {
    verifyToken
}

module.exports = authJwt