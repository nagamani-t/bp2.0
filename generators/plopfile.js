const { api } = require("./settings");

module.exports = function (plop) {
  plop.setGenerator("api", api);
};
