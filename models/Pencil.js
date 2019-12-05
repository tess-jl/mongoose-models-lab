const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  material: {
    type: String,
    required: true
  },
  sharpened: {
    type: Boolean,
    required: true,
  },
  size: {
    type: String,
    required: true,
  }, 
  color: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('Hat', schema);
