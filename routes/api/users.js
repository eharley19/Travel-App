var router = require("express").Router();
var db = require("../../models");

router
  .route("/")
  .get(async (req, res) => {
    const users = await db.User.findAll();
    res.json(users);
  })
  .post((req, res) => {
    console.log(req.body);
    const result = db.User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.redirect("/");
  });

router.route("/:id").get(async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  res.json(user);
});

router.route("/:id").put(async (req, res) => {
  const updatedUser = await db.User.update(
    {
      email: req.body.email,
      password: req.body.password
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  console.log("Error", updatedUser);
  res.json(updatedUser);
});

router.route("/:id/trips").get(async (req, res) => {
  const query = {
    where: { UserId: req.params.id }
  };

  db.Trip.findAll(query).then(trips => {
    res.json(trips);
  });
});

router.route("/:id").delete(async (req, res) => {
  const deletedUser = await db.User.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(deletedUser);
});
module.exports = router;
