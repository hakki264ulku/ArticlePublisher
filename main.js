// dotenv for environment variables
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const db = require("./app/database/db")

/**
 * Run starts the server
 */
async function Run() {
    const app = express()

    await db.MongoConnect()

    app.use(bodyParser.json())
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))

    // parse application/json
    app.use(bodyParser.json())
    app.get('/', (req, res) => {
        // eslint-disable-next-line no-tabs
        res.status(200).send('Welcome to the "Article Publisher"')
    })

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found')
        err.status = 404
        res.send('Route not found')
        next(err)
    })

    app.listen(process.env.PORT || config.port, () => {
        console.log(`${config.name} listening on port ${config.port}!`)
    })
}

Run()   