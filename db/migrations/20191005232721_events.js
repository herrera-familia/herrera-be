exports.up = function(knex) {
  return knex.schema.createTable("Events", tbl => {
    tbl.increments("id").primary();
    tbl
      .string("name")
      .unique()
      .notNullable();
    tbl.date("date").notNullable();
    tbl.string("location");
    tbl.string("comments");
    tbl.string("pic");
    tbl.integer("createdBy").notNullable();
    tbl.foreign("createdBy").references("Users.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("events");
};
