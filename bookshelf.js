var knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./runescapedata.mv"
  }
});

module.exports = require("bookshelf")(knex);
