exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("final")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("final").insert([
        { quantity_id: 3, ingredient_id: 2, recipe_id: 3 },
        { quantity_id: 3, ingredient_id: 1, recipe_id: 1 },
        { quantity_id: 4, ingredient_id: 1, recipe_id: 2 }
      ]);
    });
};
