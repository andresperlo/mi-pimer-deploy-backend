require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const moongoose = require('mongoose')
const app = express()
app.use(morgan('dev'))
app.use(express.json())
/* ----------------------------- */
const serverless = require('serverless-http')

//se tre el router
const v1Routes = require('../routes')

app.use('/.netlify/functions/api/v1', v1Routes)

//Error 404.-
app.use(function (req, res, next) {
    res.status(404).json({ mensaje: 'No Funca' })
})

moongoose.connect(
    process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) {
        return console.log(err)
    }
})

module.exports.handler = serverless(app)