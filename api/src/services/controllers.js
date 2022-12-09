const axios = require("axios");
const { conn } = require("../db");
const { Recipe, Diet } = conn.models;

const apiKeys = [
  { key: "a65963596ba7491bb4b518216df3d1fc" },
  { key: "31786421b6c2422c9af9a03bdda49875" },
  { key: "4daef69d9728459bbc1a4b28f283de55" },
  { key: "220d00053f6444a68a21c7538e75072b" },
  { key: "fd0c2b1fa8d54335942fe50414d1d435" },
];

// funcion que retorna un apikey aleatorio cada vez q es llamado
const getApiKey = () => {
  const random = Math.round(Math.random() * apiKeys.length);
  return apiKeys[random]?.key || apiKeys[0].key;
};

const apiRecipes = async () => {
  try {
    let allRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${getApiKey()}&addRecipeInformation=true&number=100`
    );
    //console.log(allRecipes)
    allRecipes = await allRecipes.data.results.map((r) => {
      return {
        id: r.id,
        name: r.title,
        image: r.image,
        healthScore: r.healthScore,
        diets: r.diets,
      };
    });
    return allRecipes;
  } catch (error) {
    console.log("apiRecipes", error);
  }
};

const dbRecipes = async () => {
  try {
    const recipesDb = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return recipesDb;
  } catch (error) {
    console.log("dbRecipes", error);
  }
};

const allRecipes = async () => {
  try {
    const recipesApi = await apiRecipes();
    const recipesDb = await dbRecipes();
    const allRecipes = [...recipesApi, ...recipesDb];
    return allRecipes;
  } catch (error) {
    console.log("allRecipes", error);
  }
};

const recipesByName = async (name) => {
  try {
    const recipes = await allRecipes();
    const recipesFound = recipes.filter((r) =>
      r.name.toLowerCase().includes(name.toLowerCase())
    );
    return recipesFound;
  } catch (error) {
    console.log("recipesByName", error);
  }
};

const recipesById = async (id) => {
  try {
    if (isNaN(id)) {
        const recipeFromDb = await Recipe.findByPk(
            id,
            { include: Diet },
        );
        return recipeFromDb;
    };

    let recipeFound = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${getApiKey()}`
    );
    recipeFound = await recipeFound.data;
    const recipe = {
      id: recipeFound.id,
      name: recipeFound.title,
      image: recipeFound.image,
      summary: recipeFound.summary,
      healthScore: recipeFound.healthScore,
      diets: recipeFound.diets,
      stepByStep:
        recipeFound.analyzedInstructions[0] &&
        recipeFound.analyzedInstructions[0].steps.map((p) => p.step),
    };
    return recipe;

  } catch (error) {
    console.log("recipesById", error);
  }
};

const createRecipe = async (body) => {
    const { name, summary, healthScore, stepByStep, image, diets } = body;
    try {
        const recipeCreated = await Recipe.create({
            name,
            summary,
            healthScore,
            stepByStep,
            image
        });
        const dietsDB = await Diet.findAll({
            where: { name: diets }
        })
        recipeCreated.addDiet(dietsDB);
        return recipeCreated;
    } catch (error) {
        console.log("createRecipe", error);
    }

};

module.exports = {
  allRecipes,
  recipesByName,
  recipesById,
  createRecipe,
};
