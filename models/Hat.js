//has fabirc 
//has shape 
//has size

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shape: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  }, 
  logo: {
    type: Boolean, 
    required: true
  }
});

module.exports = mongoose.model('Hat', schema);