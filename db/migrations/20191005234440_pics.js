exports.up = function(knex) {
  knex.schema.createTable("Pics", tbl => {
    tbl.increments("id").primary();
    tbl.string("name").notNullable();
    tbl.string("description");
    tbl
      .string("url")
      .notNullable()
      .unique();
    tbl.foreign("eventId").references("Events.id");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("Pics");
};
