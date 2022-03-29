require('dotenv').config()
const { env } = process

module.exports = {
    name: env.NAME,
    port: env.PORT,
    mongoConnectionString: env.MONGOCONNECTIONSTRING
}