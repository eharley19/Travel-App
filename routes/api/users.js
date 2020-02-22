// Use format from todo class app -
// create referrence to express and express router- this file will hold and export all the routes in app

var router = require("express").Router();
var db = require("../../models");

router
  .route("/")
  .get(async (req, res) => {
    const users = await db.User.findAll();
    res.json(users);
  })
  .post((req, res) => {
    const result = db.User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.json(result);
  });

module.exports = router;
