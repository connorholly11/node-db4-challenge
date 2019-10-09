exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "chicken", quantity: 1 },
        { ingredient: "eggs", quantity: 1 },
        { ingredient: "milk", quantity: 3 }
      ]);
    });
};
