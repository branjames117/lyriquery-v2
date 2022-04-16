const router = require("express").Router();
const { Song } = require("../models/Song");

router.post("/", (req, res) => {
  // update posted to submit route, must be a request to update a song, redirect
  console.log(req.body);
  if (req.body.update) {
    Song.findOne({ _id: req.body.update }, (err, song) => {
      if (err) console.log(err);
      res.json(song);
    });
    // songID posted to submit route, must be an update in progress, redirect
  } else if (req.body.songID) {
    Song.findOne({ _id: req.body.songID }, (err, song) => {
      if (err)
        res.render("error", {
          err: "Song ID not found in the database. Something went wrong.",
        });
      song.artist = req.body.artist;
      song.featuredArtist = req.body.featured;
      song.title = req.body.title;
      song.trackNumber = req.body.track;
      song.album = req.body.album;
      song.authors = req.body.authors.replace(", ", ",").split(",");
      song.year = req.body.year;
      song.lyrics = req.body.lyrics
        .split("\r\n")
        .filter((line) => line.length > 0);
      song.save((error) => {
        if (err) {
          console.log(err);
        } else {
          res.json(song);
        }
      });
    });
    // no update nor songID posted, must be a new submission, redirect
  } else {
    console.log("uploading new song");
    let song = new Song({
      title: req.body.title,
      artist: req.body.artist,
      featuredArtist: req.body.featured,
      album: req.body.album,
      year: req.body.year,
      authors: req.body.authors.replace(", ", ",").split(","),
      trackNumber: req.body.trackNumber,
      // split the lyrics input into an array of strings separated by \r\n, then filter out empty strings
      lyrics: req.body.lyrics.split("\r\n").filter((line) => line.length > 0),
    });
    // check if song title/artist combination already exists in database
    Song.exists(
      { title: req.body.title, artist: req.body.artist },
      (err, doc) => {
        if (err) console.log("error", err);
        // if song already exists, send to error route
        if (doc) console.log("song exists");
        // else save it to the database
        song.save((error) => {
          if (error) {
            console.log("error 2", error);
          } else {
            res.json(song);
          }
        });
      }
    );
  }
});

module.exports = router;
