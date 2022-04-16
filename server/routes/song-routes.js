const router = require("express").Router();
const { Song } = require("../models/Song");

router.post("/", (req, res) => {
  const { id } = req.body;
  Song.findOne({ _id: id }, (err, song) => {
    if (err) console.error(err);
    console.log(song);
    res.json(song);
  });
});

module.exports = router;
