import axios from 'axios';
import {
    GET_ALL_RECIPES,
    GET_RECIPE,
    GET_RECIPE_DETAIL,
    CREATE_RECIPE,
    GET_DIETS,
    START_LOADING,
    FILTER_BY_DIETS,
    ORDER_BY_NAME,
    ORDER_BY_HEALTHSCORE,
    FILTER_CREATED,
    DELETE_RECIPE,
} from './action-types';

// const URL_C = 'http://localhost:3001';
const URL_C= `https://pi-food-production-6f65.up.railway.app`;

export const getAllRecipes = () => {
    return async function(dispatch) {
        dispatch({type: START_LOADING})
        axios.get(`${URL_C}/recipes`)
        .then(r => r.data)
        .then(json => dispatch({
            type: GET_ALL_RECIPES,
            payload: json,
        }))
        .catch((error) => console.log(error))
    };
};

export const getRecipe = (payload) => {
    return {
        type: GET_RECIPE,
        payload,
    };
};

export const getRecipeDetail = (id) => {
    return function(dispatch) {
        dispatch({type: START_LOADING})
        axios.get(`${URL_C}/recipes/${id}`)
        .then(r => r.data)
        .then (json => dispatch({
            type: GET_RECIPE_DETAIL,
            payload: json,
        }))
        .catch((error) => console.log(error))
    };
};

export const createRecipe = (payload) => {
    return async function(dispatch){
            axios.post(`${URL_C}/recipes`, payload)
            .then(json => dispatch({
            type: CREATE_RECIPE,
            payload: json,
        }))
    };
};


export const getDiets = () => {
    return function (dispatch) {
        dispatch({type: START_LOADING})
        axios.get(`${URL_C}/diets`)
        .then(r => r.data)
        .then(json => dispatch({
            type: GET_DIETS,
            payload: json,
        }))
        .catch((error) => console.log(error))
    };
};

export const filterByDiets = (payload) => {
    return {
        type: FILTER_BY_DIETS,
        payload,
    };
};

export const orderByAlphabetically = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload,
    };
};

export const orderByHealthScore = (payload) => {
    return {
        type: ORDER_BY_HEALTHSCORE,
        payload,
    };
};

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload,
    };
};

export const deleteRecipe = (payload) => {
    return async function(dispatch){
        await axios.delete(`${URL_C}/recipes/${payload}`)
        dispatch({
            type: DELETE_RECIPE,
            payload,
        });
    };
};


