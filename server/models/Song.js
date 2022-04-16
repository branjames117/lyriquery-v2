const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "No song title provided."],
  },
  artist: {
    type: String,
    required: [true, "No song artist provided."],
  },
  featuredArtist: {
    type: String,
  },
  album: {
    type: String,
    required: [true, "No song album provided."],
  },
  year: {
    type: Number,
    required: [true, "No song year provided."],
  },
  authors: {
    type: Array,
  },
  lyrics: {
    type: Array,
    required: [true, "No song lyrics provided."],
  },
  trackNumber: {
    type: Number,
    required: [true, "No track number provided."],
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = { Song };
