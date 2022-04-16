require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
require("./db/connection");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
