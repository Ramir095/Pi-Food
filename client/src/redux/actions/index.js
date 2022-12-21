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

export const getAllRecipes = () => {
    return function(dispatch) {
        dispatch({type: START_LOADING})
        axios.get('http://localhost:3001/recipes')
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
        axios.get(`http://localhost:3001/recipes/${id}`)
        .then(r => r.data)
        .then (json => dispatch({
            type: GET_RECIPE_DETAIL,
            payload: json,
        }))
    }
};

export const createRecipe = (payload) => {
    return async function() {
        let response = await axios.post('http://localhost:3001/diets', payload);
        return response
    }
};

export const getDiets = () => {
    return async function (dispatch) {
        dispatch({type: START_LOADING})
        axios.get('http://localhost:3001/diets')
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