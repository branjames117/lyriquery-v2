const router = require("express").Router();
const { Song } = require("../models/Song");

router.post("/", (req, res) => {
  const { artist } = req.body;
  Song.find({ artist: artist }, (err, songs) => {
    if (err) console.error(err);
    res.json(songs);
  });
});

module.exports = router;
