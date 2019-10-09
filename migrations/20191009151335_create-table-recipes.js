exports.up = function(knex) {
  return knex.schema
    .createTable("recipe", tbl => {
      tbl.increments();
      tbl
        .string("recipe", 128)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient", 128)
        .notNullable()
        .unique();
    })
    .createTable("final", tbl => {
      tbl.increments();
      tbl.integer("quantity").notNullable();
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe");
    });
};

exports.down = function(knex) {
  return knex.scheme
    .dropTableIfExists("final")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe");
};
