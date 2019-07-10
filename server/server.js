const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

require("dotenv").config();

var server = null;

function start(callback) {
  const app = express();
  app.use(cors());
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use((err, req, res, next) => {
    callback(new Error("Something went wrong!, err:" + err), null);
    res.status(500).send("Something went wrong!");
  });

  app.use("/api", require("../src/routes/routeExample"));

  server = app.listen(process.env.SERVICE_PORT, () => callback(null, server));
}

function stop() {
  if (server) server.close();
  return true;
}

module.exports = { start, stop };
