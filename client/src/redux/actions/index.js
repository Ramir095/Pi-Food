import axios from 'axios';
import {
    GET_ALL_RECIPES,
    GET_RECIPE,
    GET_RECIPE_DETAIL,
    //CREATE_RECIPE,
    GET_DIETS,
    START_LOADING,
    FILTER_BY_DIETS,
    ORDER_BY_NAME,
    ORDER_BY_HEALTHSCORE,
    FILTER_CREATED,
} from './action-types';

const URL = `https://pi-food-production-6f65.up.railway.app`;

export const getAllRecipes = () => {
    return function(dispatch) {
        dispatch({type: START_LOADING})
        axios.get(`${URL}/recipes`)
        .then(r => r.data)
        .then(json => dispatch({
            type: GET_ALL_RECIPES,
            payload: json,
        }))
    };
};

export const getRecipe = (payload) => {
    return {
        type: GET_RECIPE,
        payload,
    };
};

export const getRecipeDetail = (id) => {
    return async function(dispatch) {
        dispatch({type: START_LOADING})
        axios.get(`${URL}/recipes/${id}`)
        .then(r => r.data)
        .then (json => dispatch({
            type: GET_RECIPE_DETAIL,
            payload: json,
        }))
    }
};

export const createRecipe = (payload) => {
    return async function() {
        let response = await axios.post(`${URL}/recipes`, payload);
        return response
    }
};

export const getDiets = () => {
    return async function (dispatch) {
        dispatch({type: START_LOADING})
        axios.get(`${URL}/diets`)
        .then(r => r.data)
        .then(json => dispatch({
            type: GET_DIETS,
            payload: json,
        }))
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
    }
};