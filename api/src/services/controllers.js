const axios = require("axios");
const { conn } = require("../db");
const { Recipe, Diet } = conn.models;

const apiKeys = [
  { key: "855a06c0f3464fef9cf2fae6042c8a01" },
  { key: "07be7b1491a444d9ae11e40cdbc8b2b5" },
  { key: "1514abb286ba4986afe6b63438a3541a" },
  { key: "901d1a9a1aa24d8d9e2accc883bee57a" },
  // { key: "fd0c2b1fa8d54335942fe50414d1d435" },
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

const recipeDelete = async (id) => {
  try {
    const recipeFound = Recipe.destroy({
      where: { id }
    })
    return recipeFound;
  } catch (error) {
    console.log(error);
  }
};

//----------------------------------------------------------------

const allDiets = async () => {
  let diets = await Diet.findAll({attributes: ["name"]});
  try {
        if (diets.length > 0) {
            return diets;

        } else {
            let dietss = await Diet.bulkCreate([
                {name: 'gluten free'},
                {name: 'dairy free'},
                {name: 'lacto ovo vegetarian'},
                {name: 'vegan'},
                {name: 'pescatarian'},
                {name: 'paleolithic'},
                {name: 'primal'},
                {name: 'fodmap friendly'},
                {name: 'whole 30'},
                {name: 'vegetarian'},
                {name: 'ketogenic'}
            ]);

            return dietss;

        }

  } catch (error) {
    console.log("allDiets", error);
  }
};

module.exports = {
  allRecipes,
  recipesByName,
  recipesById,
  createRecipe,
  recipeDelete,
  allDiets,
};
