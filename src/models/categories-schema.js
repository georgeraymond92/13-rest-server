'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('categories' , categories);