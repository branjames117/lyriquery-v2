const router = require("express").Router();
const { Song } = require("../models/Song");

router.post("/", (req, res) => {
  const { artist, album } = req.body;
  Song.find({ artist: artist, album: album }, (err, songs) => {
    if (err) console.error(err);
    res.json(songs);
  });
});

module.exports = router;
