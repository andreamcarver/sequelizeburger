var sequelize = require("../config/connection.js");
var Sequelize = require('sequelize');

const Burger = sequelize.define('burger', {
  burger_name: {
    type: Sequelize.STRING
  },
  devour: {
    type: Sequelize.BOOLEAN
  }
});

Burger.sync({force: true}).then(() => {
  // Table created
  return Burger.create({
    burger_name: "My Burger",
    devour: false
  },
  );
});


var burger = {
  selectAll: function(cb) {
    Burger.findAll().then(burgers=> {
      cb(burgers)
    })
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    var burger = {};
    for (i=0; i<cols.length; i++){
      burger[ cols[i] ] = vals[i]
    }
    Burger.upsert(burger, {}).then(b=>{
      cb(b)
    })
  },

  updateOne: function(objColVals, condition, cb) {
    Burger.find({where: condition})
    .then(burger => {
      if(burger){
        burger.updateAttributes(objColVals).then(()=>cb(burger))
      }
    })
  }
};


// Export the database functions for the controller (burgersController.js).
module.exports = burger;
