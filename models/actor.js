const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')

const actorSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  dob: { type: Date, required: true },
  bio: { type: String },
  active:{type:Boolean,default:true}
},{
  timestamps:true
});

module.exports = mongoose.model('Actor', actorSchema);