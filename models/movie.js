const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const movieSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  yearOfRelease: { type: Number, required: true },
  plot: { type: String },
  poster: { type: String },
  producer: { type: String, ref: 'Producer', required: true },
  actors: [{ type: String, ref: 'Actor' }],
  active: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);
