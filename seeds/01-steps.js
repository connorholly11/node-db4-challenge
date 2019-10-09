exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { step_number: "1", instruction: "get milk", recipe_id: 1 },
        { step_number: "2", instruction: "pour milk", recipe_id: 1 },
        { step_number: "3", instruction: "enjoy", recipe_id: 1 }
      ]);
    });
};
