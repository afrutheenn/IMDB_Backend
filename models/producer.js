const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')


const producerSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  dob: { type: Date },
  bio: { type: String },
  active:{type:Boolean,default:true}
},{
  timestamps:true
});

module.exports = mongoose.model('Producer', producerSchema);