import {
  START_LOADING,
  GET_ALL_RECIPES,
  GET_RECIPE,
  GET_RECIPE_DETAIL,
  CREATE_RECIPE,
  GET_DIETS,
  FILTER_BY_DIETS,
  ORDER_BY_NAME,
  ORDER_BY_HEALTHSCORE,
  FILTER_CREATED,
  DELETE_RECIPE,
} from "../actions/action-types";

const initialState = {
  recipes: [],
  allRecipes: [],
  recipesDetail: {},
  diets: [],
  loaded: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loaded: false,
      };
      case GET_ALL_RECIPES:
        const getArrayString = (array) => {
          return array.map((item) => item.name);
        };
        const dietsss = action.payload?.map((obj) => {
          if (obj?.Diets) {
            return {
              ...obj,
              diets: getArrayString(obj.Diets),
            };
          }
          return obj;
        });
        return {
          ...state,
          recipes: dietsss,
          allRecipes: dietsss,
          loaded: true,
        };
    case GET_RECIPE:
      const allR = state.allRecipes;
      const recipeFound = allR.filter((r) =>
        r.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        recipes: recipeFound,
        loaded: true,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipesDetail: action.payload,
        loaded: true,
      };

    case CREATE_RECIPE:
      return {
        ...state,
        loaded: true,
      };
    case GET_DIETS:
      return {
        loaded: true,
        ...state,
        diets: action.payload,
      };

    case FILTER_BY_DIETS:
      let found = state.allRecipes.filter((f) => f);
      console.log(found);
      let allRecipess;
      if (action.payload === "All") {
        allRecipess = [...state.allRecipes];
      } else {
        allRecipess = state.allRecipes.filter(
          (r) => r.diets && (r.diets.name === action.payload || r.diets.includes(action.payload))
        );
      }

      return {
        ...state,
        recipes: allRecipess,
      };
    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "A-Z"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedArr,
      };
    case ORDER_BY_HEALTHSCORE:
      let sortedScore =
        action.payload === "Asc"
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        recipes: sortedScore,
      };
    case FILTER_CREATED:
      const allRecipe = state.allRecipes;
      const createdFilter =
        action.payload === "created"
          ? allRecipe.filter((e) => e.createdInDb)
          : allRecipe.filter((e) => !e.createdInDb);
      return {
        ...state,
        recipes: action.payload === "All" ? state.allRecipes : createdFilter,
      };
    case DELETE_RECIPE:
      // let allRecipeDb = state.allRecipes
      // // console.log("reducerUno", allRecipeDb);
      // allRecipeDb = allRecipeDb.filter(r => r.id !== action.payload)
      // // console.log("reducer", recipeDelete);
      return {
        ...state,
        recipes: state.recipes.filter((r) => r.id !== action.payload),
        allRecipes: state.allRecipes.filter((r) => r.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;




// case GET_ALL_RECIPES:
//         const getArrayString = (array) => {
//           return array.map((item) => item.name);
//         };
//         const dietsss = action.payload?.map((obj) => {
//           if (obj?.Diets) {
//             return {
//               ...obj,
//               diets: getArrayString(obj.Diets),
//             };
//           }
//           return obj;
//         });
//         return {
//           ...state,
//           recipes: dietsss,
//           allRecipes: dietsss,
//           loaded: true,
//         };