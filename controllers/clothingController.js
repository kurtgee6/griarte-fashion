const db = require("../models");

// Defining methods for the clothingController
module.exports = {
  findAll: function(req, res) {
    console.log(req.body);
    db.clothing
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.clothing
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.clothing
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.clothing
      .update(
        { cart: true, 
        }, {
          where: {
            [req.body.id.eq] : req.params.id
          }
        })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.clothing
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
