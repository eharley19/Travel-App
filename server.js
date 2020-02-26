// DEPENDENCIES (npm packages) / requires to give our server useful functionality
// ==============================================================================
// this file creates express connection & runs node server

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models");
// const dotenv = require('dotenv').config()

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use(require("./routes"));

db.sequelize.sync();

app.listen(process.env.PORT || 8080, () => {
  if (process.env.PORT) {
    console.log(
      `[START] server started successfully on port ${process.env.PORT}`
    );
  } else {
    console.log(`[START] server started successfully at http://localhost:8080`);
  }
});
