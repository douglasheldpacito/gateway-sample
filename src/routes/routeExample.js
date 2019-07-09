const routes = require("express").Router();

const ExampleController = require("../controllers/ExampleController");

routes.get("/example", ExampleController.index);

module.exports = routes;
