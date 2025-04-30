module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_here',
    JWT_EXPIRE: process.env.JWT_EXPIRE || '30d',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/imdb-clone',
    PORT: process.env.PORT || 5000
  };