const config = require('../../config')

const mongoose = require('mongoose');

/**
 * MongoConnect connects to Mongodb atlas via connection string
 */
async function MongoConnect() {
  try {
    await mongoose.connect(config.mongoConnectionString);
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  MongoConnect
}