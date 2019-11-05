exports.up = function(knex) {
  knex.schema.createTable("Events", tbl => {
    tbl.increments("id").primary();
    tbl
      .string("name")
      .unique()
      .notNullable();
    tbl.date("date").notNullable();
    tbl.string("location");
    tbl.string("comments");
    tbl.string("pic");
    tbl.foreign("createdBy").references("Users.id");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("events");
};
