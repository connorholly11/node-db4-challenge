const express = require("express");

const db = require("./recipe.helper");

const router = express.Router();

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting recipes"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getRecipesById(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting recipe ID"
      });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const recipe_id = req.params.id;

  db.getShoppingList(recipe_id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting ingredients"
      });
    });
});

router.get("/:id/steps", (req, res) => {
  const recipe_id = req.params.id;

  db.getInstructions(recipe_id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting instructions"
      });
    });
});

module.exports = router;
