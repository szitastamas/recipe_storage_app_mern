import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import AlertContext from '../alert/AlertContext';
import AuthContext from '../auth/AuthContext';
import {
    GET_PUBLIC_RECIPES,
    GET_OWN_RECIPES,
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
    const { setAlert } = alertContext;
    const authContext = useContext(AuthContext)
    const { user } = authContext;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Get all recipes

    const getPublicRecipes = async () => {
        try {
            const res = await axios.get('/api/recipes/public');
            dispatch({
                type: GET_PUBLIC_RECIPES,
                payload: res.data
            });
        } catch (err) {
            setAlert('Server connection failed', 'fail', 4000);
        }
    };

    const getOwnRecipes = async (userId) => {
        try {
            const res = await axios.get(`/api/recipes/user/${userId}`)

            dispatch({
                type: GET_OWN_RECIPES,
                payload: res.data
            })
        } catch (err) {
            console.log(err);
            setAlert('Server connection failed', 'fail', 4000);
        }
    }

    // Add recipe
    const addRecipe = async recipe => {
        try {

            const res = await axios.post("/api/recipes", recipe,config)

            dispatch({
                type: ADD_RECIPE,
                payload: res.data
            });
            setAlert("Recipe successfully uploaded", "success")
        } catch (err) {
            console.error(err.message)
            setAlert("Upload process failed. Please try again!", "fail")
        }
    };

    // Update recipe

    // Delete recipe

    const deleteRecipe = async id => {
        try {
            const res = await axios.delete(`/api/recipes/${id}`)

            dispatch({
                type: DELETE_RECIPE,
                payload: id
            })
            setAlert(res.data.msg, "success")
        } catch (err) {
            console.error(err.message)
            setAlert("Delete process failed. Please try again!", "fail")
        }
    }

    // Set current recipe

    // Clear current recipe

    // Filter recipes

    // Clear filter

    return (
        <RecipeContext.Provider
            value={{
                recipes: state.recipes,
                loading: state.loading,
                addRecipe,
                getPublicRecipes,
                getOwnRecipes,
                deleteRecipe
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    );
};

export default RecipeState;
