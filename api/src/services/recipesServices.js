const { allRecipes, recipesByName, recipesById, createRecipe } = require("./controllers");

const getAllRecipes = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const recipesFound = await recipesByName(name);
      recipesFound.length > 0
        ? res.status(200).json(recipesFound)
        : res.status(404).send("no recipe found with the indicated name!");
    } else if (!name) {
      const recipes = await allRecipes();
      return res.status(200).json(recipes);
    }
  } catch (error) {
    console.log(error);
  }
};

const getRecipesById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipeFound = await recipesById(id);
    recipeFound
        ? res.status(200).json(recipeFound)
        : res.status(404).send(`no recipe found with the id: ${id}`);
  } catch (error) {
    console.log(error);
  };
};

const postRecipe = async (req, res) => {
  try {
    const recipeCreate = await createRecipe(req.body)
    res.status(200).json(recipeCreate)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRecipes,
  getRecipesById,
  postRecipe,
};
