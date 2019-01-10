'use strict';
const categoriesModel = require('./categories-schema');

class Categories {

  constructor() {
  }

  get(id) {
    let queryObject = id ? {_id:id} : {};
    return categoriesModel.find(queryObject);

  }
  
  post(entry) {
    let newRecord = new categoriesModel(entry);
    return newRecord.save()
  }

  put(id, entry) {
    return categoriesModel.findOneAndUpdate( { _id: id}, { $set: entry }, { new: true });

  }

  delete(id) {
    return categoriesModel.findOneAndRemove( { _id: id} );
  }

}

module.exports = Categories;
