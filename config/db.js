const mongoose = require('mongoose');
const Config = require('./Config');

const connectDB = () => {
  mongoose.connect(Config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(conn => {
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  });
};

module.exports = connectDB;
