const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dataRoutes = require("./routes/data");
const commerceRoutes = require("./routes/commerce");
const etablissementRoutes = require("./routes/etablissement");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/data", dataRoutes);
app.use("/commerce", commerceRoutes);
app.use("/etablissement", etablissementRoutes);

module.exports = app;