const routes = require("next-routes")();

routes
  .add("/supplies/new", "/supplies/new")
  .add("/supplies/:address", "/supplies/show")
  .add("/supplies/:address/requests", "/supplies/requests/index")
  .add("/supplies/:address/requests/new", "/supplies/requests/new");

module.exports = routes;
