const db = require("../db.config");

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipe");
}

function getRecipesById(id) {
  return db("recipe").where("id", "=", id);
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .join("recipe", "ingredients.recipe_id", "=", "recipe_id")
    .select("recipe.recipe", "ingredients.*")
    .where("recipe_id", "=", recipe_id);
}

function getInstructions(recipe_id) {
  return db("steps")
    .join("recipe", "steps.recipe_id", "=", "recipe_id")
    .select("recipe.recipe", "steps.*")
    .where("recipe_id", "=", recipe_id)
    .orderBy("instruction");
}
