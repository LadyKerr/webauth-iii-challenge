exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id"); //primary key
    tbl
      .string("username", 128)
      .notNullable()
      .unique();

    tbl.string("password", 128).notNullable();
    tbl.string("department");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
