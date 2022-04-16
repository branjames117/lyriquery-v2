const router = require("express").Router();
const { Song } = require("../models/Song");

router.get("/", (req, res) => {
  Song.find({}, (err, doc) => {
    if (err)
      res.json({
        err: "Could not access the database! Contact your administrator.",
      });
    // send all database entries as an array to the database route
    res.json(doc);
  });
});

module.exports = router;
