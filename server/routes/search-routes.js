const router = require("express").Router();
const { Song } = require("../models/Song");
const { checkLineMatch } = require("../utils/checkLineMatch");
const { getRandomQuery } = require("../utils/getRandomQuery");

router.post("/", (req, res) => {
  // start with an empty array
  let matches = [];
  const { artist, query } = req.body;

  Song.find({ artist: { $regex: artist } }, (err, doc) => {
    if (!query) {
      res.json(doc);
    }

    doc.forEach((song) => {
      song.lyrics.forEach((line, index) => {
        // call checkLineMatch on each line, if line contains match, push it to array with #
        if (checkLineMatch(query, line)) {
          matches.push({
            id: song._id,
            title: song.title,
            artist: song.artist,
            trackNumber: song.trackNumber,
            featuredArtist: song.featuredArtist,
            album: song.album,
            year: song.year,
            authors: song.authors,
            lineNumber: index + 1,
            line: line,
          });
        }
      });
    });

    // sort matches by year, looks cleaner when displayed
    matches.sort((a, b) => {
      return b.year - a.year;
    });

    res.json({
      doc: matches,
    });
  });
});

module.exports = router;
