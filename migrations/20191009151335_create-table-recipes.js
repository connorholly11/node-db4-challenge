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
      tbl.integer("quantity").notNullable();
    })
    .createTable("steps", tbl => {
      tbl.integer("step_number").notNullable();
      tbl.text("instruction").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe");
    })
    .createTable("final", tbl => {
      tbl.increments();
      tbl
        .integer("quantity_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
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
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe");
};
