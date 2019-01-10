'use strict';

const productsModel = require('./products-schema.js');

class Products {

  constructor() {}

  get(id) {
    let queryObject = id ? {_id:id} : {};
    return productsModel.find(queryObject);

  }
  
  post(entry) {
    let newRecord = new productsModel(entry);
    return newRecord.save()
  }

  put(id, entry) {
    return productsModel.findOneAndUpdate( { _id: id}, { $set: entry }, { new: true });

  }

  delete(id) {
    return productsModel.findOneAndRemove( { _id: id} );
  }

  sanitize(entry) {

    // Not really sure what I should be doing here and is does not seem to be shown in the instructions
    
  }

}

module.exports = Products;
