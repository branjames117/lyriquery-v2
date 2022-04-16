const router = require("express").Router();

const databaseRoutes = require("./database-routes");
const searchRoutes = require("./search-routes");
const artistRoutes = require("./artist-routes");

router.use("/database", databaseRoutes);
router.use("/search", searchRoutes);
router.use("/artist", artistRoutes);

module.exports = router;
