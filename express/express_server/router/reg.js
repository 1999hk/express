const express = require('express')

const Router = express.Router()

Router.post('/', (req, res, next) => {
    res.send(req.body)
})

module.exports = Router
