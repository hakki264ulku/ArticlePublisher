const config = require('../../config')

const mongoose = require('mongoose');

/**
 * MongoConnect connects to Mongodb atlas via connection string
 */
async function MongoConnect() {
  await mongoose.connect(config.mongoConnectionString);
}


module.exports = {
    MongoConnect
}