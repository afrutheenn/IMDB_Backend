const app = require('./app');
const connectDB = require('./config/db');
const config = require('./config/Config');

const PORT = config.PORT || 5000;
connectDB();

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});