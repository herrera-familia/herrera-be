exports.up = function(knex) {
  return knex.schema.createTable("Pics", tbl => {
    tbl.increments("id").primary();
    tbl.string("name").notNullable();
    tbl.string("description");
    tbl
      .string("url")
      .notNullable()
      .unique();
    tbl.integer("eventId").notNullable();
    tbl.foreign("eventId").references("Events.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Pics");
};
