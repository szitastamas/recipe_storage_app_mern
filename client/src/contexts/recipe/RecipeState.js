import React, { useReducer, useContext } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import AlertContext from '../alert/AlertContext';
import {
    GET_PUBLIC_RECIPES,
    CLEAR_RECIPES,
    ADD_RECIPE,
    DELETE_RECIPE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_RECIPE,
    FILTER_RECIPES,
    CLEAR_FILTER
} from '../reducerTypes';

const RecipeState = props => {
    const initialState = {
        recipes: [],
        loading: true
    };

    const [state, dispatch] = useReducer(RecipeReducer, initialState);
    const alertContext = useContext(AlertContext);
    //Get all recipes

    const getPublicRecipes = async () => {
        try {
            const res = await axios.get('/api/recipes/public');
            res.data.map(rec => {
                rec.date = rec.date.slice(0, 10).replace(/-/g, '/');
            });
            dispatch({
                type: GET_PUBLIC_RECIPES,
                payload: res.data
            });
        } catch (err) {
            alertContext.setAlert("Could not connect to server", "fail", 5000)
        }
    };

    // Add recipe
    const addRecipe = recipe => {
        recipe.id = uuid();
        dispatch({
            type: ADD_RECIPE,
            payload: recipe
        });
    };

    // Update recipe

    // Delete recipe

    // Set current recipe

    // Clear current recipe

    // Filter recipes

    // Clear filter

    return (
        <RecipeContext.Provider
            value={{
                recipes: state.recipes,
                addRecipe,
                getPublicRecipes,
                loading: state.loading
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    );
};

export default RecipeState;
