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
} from '../actions/action-types';

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
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
                loaded: true,
            };
        case GET_RECIPE:
            const allR = state.allRecipes;
            const recipeFound = allR.filter(r => r.name.toLowerCase().includes(action.payload.toLowerCase()));
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
                ...state,
                diets: action.payload,
            }; 
        

        case FILTER_BY_DIETS:
            const allRecipes = state.allRecipes;
            const dietsFilter = action.payload === 'All' ? allRecipes : allRecipes.filter(r => r.diets?.includes(action.payload))
            return {
                ...state,
                recipes: dietsFilter,
            }
        case ORDER_BY_NAME:
            //console.log("action", action.payload);
            let sortedArr = action.payload === 'A-Z' ? state.recipes.sort(function (a, b) {
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
            }) : 
            state.recipes.sort(function (a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                recipes: action.payload === "All" ? state.allRecipes : sortedArr,
            }    
        case ORDER_BY_HEALTHSCORE:
            let sortedScore = action.payload === 'Asc' ? state.recipes.sort(function (a, b) {
                if(a.healthScore > b.healthScore){
                    return 1;
                }
                if(b.healthScore > a.healthScore){
                    return -1;
                }
                return 0;
            }) : 
            state.recipes.sort(function (a, b) {
                if(a.healthScore > b.healthScore) {
                    return -1;
                }
                if(b.healthScore > a.healthScore) {
                    return 1;
                }
                return 0;
            })
            
            return {
                ...state,
                recipes: action.payload === "All" ? state.allRecipes : sortedScore,
            }
        case FILTER_CREATED:
            const allRecipe = state.allRecipes
            const createdFilter = action.payload === "created" ? allRecipe.filter(e => e.createdInDb) : allRecipe.filter(e => !e.createdInDb)
            return {
                ...state,
                recipes: action.payload === "All" ? state.allRecipes : createdFilter,
            }
        default: 
            return { ...state }
    }
};

export default rootReducer;