const routes = require("express").Router();
const httpProxy = require("express-http-proxy");

const serviceApi = httpProxy(process.env.API_SERVICE_URL);

routes.get("/example", serviceApi);

module.exports = routes;
