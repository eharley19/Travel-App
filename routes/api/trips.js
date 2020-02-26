var router = require("express").Router();
var db = require("../../models");

router
  .route("/")
  .get(async (req, res) => {
    const trips = await db.Trip.findAll();
    res.json(trips);
  })
  .post((req, res) => {
    const result = db.Trip.create({
      name: req.body.name,
      notes: req.body.notes,
      UserId: req.body.UserId
    });
    res.json(result);
  });

router.route("/:id").put(async (req, res) => {
  const updatedTrip = await db.Trip.update(
    {
      name: req.body.name,
      notes: req.body.notes
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  console.log("Error", updatedTrip);
  res.json(updatedTrip);
});

router.route("/:id").delete(async (req, res) => {
  const deletedTrip = await db.Trip.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(deletedTrip);
});

module.exports = router;
