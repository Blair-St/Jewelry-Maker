const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Metal', 'Stone', 'Bead', 'Finding', 'Other'],
    default: 'Other'
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  unit: {
    type: String,
    required: true,
    default: 'pcs'
  },
  cost: {
    amount: {
      type: Number,
      required: true,
      default: 0
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  supplier: {
    name: String,
    contactInfo: String,
    website: String
  },
  location: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  attributes: {
    color: String,
    size: String,
    weight: Number,
    material: String
  },
  imageUrl: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Update the lastUpdated field on save
MaterialSchema.pre('save', function(next) {
  this.lastUpdated = Date.now();
  next();
});

module.exports = mongoose.model('Material', MaterialSchema);