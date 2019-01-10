![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Rest Server

### Author: George Raymond

### Links and Resources
* [repo](https://github.com/georgeraymond92/13-rest-server)
* [travis](https://www.travis-ci.com/georgeraymond92/13-rest-server)
* [heroku](https://dashboard.heroku.com/apps/floating-harbor-73108)



### Modules
#### /src/models/categories.js
#### /src/models/categories-schema.js
#### /src/models/products.js
#### /src/models/products-schema.js
##### Exported Values and Methods
* get
* get/:id
* post
* put/:id
* delete/:id

### Setup
#### `.env` requirements
* `PORT` - defined in env
* `MONGODB_URI` - mongodb://localhost:27017/categories

#### Running the app
* `npm start`
* Endpoint: `/index.js`

  
#### Tests
* supergoose *Provided for lab

