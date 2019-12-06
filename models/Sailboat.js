const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: {
    type: String,
    required: true, 
    enum: ['sloop', 'schooner', 'yaul']
  },
  masts: {
    type: Number,
    required: true,
    min: 1, 
    max: 6
  },
  keel: {
    type: Boolean,
    required: true,
  }, 
  material: {
    type: String, 
    required: true,
  }
});

module.exports = mongoose.model('Sailboat', schema);
