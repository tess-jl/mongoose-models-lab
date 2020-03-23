const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  subtype: {
    type: String,
    required: true
  },
  excitatory: {
    type: Boolean,
    required: true,
  },
  cns: {
    type: Boolean,
    required: true,
  }, 
  dendrites: {
    type: Number, 
    required: true, 
    min: 1
  }
});

module.exports = mongoose.model('Neuron', schema);
