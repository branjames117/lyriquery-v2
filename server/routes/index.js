const router = require("express").Router();

const databaseRoutes = require("./database-routes");
const searchRoutes = require("./search-routes");
const artistRoutes = require("./artist-routes");
const albumRoutes = require("./album-routes");
const songRoutes = require("./song-routes");
const submitRoutes = require("./submit-routes");

router.use("/database", databaseRoutes);
router.use("/search", searchRoutes);
router.use("/artist", artistRoutes);
router.use("/album", albumRoutes);
router.use("/song", songRoutes);
router.use("/submit", submitRoutes);

module.exports = router;
