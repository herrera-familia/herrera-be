exports.up = function(knex) {
  knex.schema.createTable("Users", function(table) {
    table.increments("id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("password").notNullable();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("profilePic");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users");
};
