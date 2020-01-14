import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import AlertContext from '../alert/AlertContext';
import uuid from 'uuid';
import {
    GET_PUBLIC_RECIPES,
    GET_OWN_RECIPES,
    ADD_RECIPE,
    DELETE_RECIPE,
    UPDATE_RECIPE,
    CLEAR_RECIPE_FILTER,
    SET_RECIPE_FILTER,
    TRIGGER_LOADING,
    UPLOAD_PICTURE
} from '../reducerTypes';

const RecipeState = props => {
    const initialState = {
        publicRecipes: [],
        ownRecipes: [],
        filteredRecipes: [],
        filterText: '',
        loading: true
    };

    const [state, dispatch] = useReducer(RecipeReducer, initialState);
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

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

    const getOwnRecipes = async userId => {
        try {
            const res = await axios.get(`/api/recipes/user/${userId}`);

            dispatch({
                type: GET_OWN_RECIPES,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
            setAlert('Server connection failed', 'fail', 4000);
        }
    };

    // Add recipe
    const addRecipe = async recipe => {
        try {
            const res = await axios.post('/api/recipes', recipe, config);
            dispatch({
                type: ADD_RECIPE,
                payload: res.data
            });
            setAlert('Recipe successfully uploaded', 'success');
        } catch (err) {
            console.error(err.message);
            setAlert('Upload process failed. Please try again!', 'fail');
        }
    };

    const uploadPicture = async pic => {
        const randomId = uuid();
        const picName = `${randomId}${pic.name}`;
        console.log(picName);
        console.log(pic);
        const formData = new FormData();
        formData.append('file', pic);

        try {
            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return res.data;
        } catch (err) {
            setAlert('Uploading photo failed.', 'fail');
            throw new Error(err.message);
        }
    };

    // Update recipe
    const updateRecipe = async recipe => {
        console.log('Updating recipe...');

        try {
            const res = await axios.put(`/api/recipes/${recipe._id}`, recipe, config);

            dispatch({
                type: UPDATE_RECIPE,
                payload: res.data
            });

            setAlert('Recipe successfully updated.', 'success', 2500);
        } catch (err) {
            console.log(err.message);
            setAlert('Updating process failed. Try again!');
        }
    };

    // Delete recipe

    const deleteRecipe = async id => {
        try {
            const res = await axios.delete(`/api/recipes/${id}`);

            dispatch({
                type: DELETE_RECIPE,
                payload: id
            });
            setAlert(res.data.msg, 'success');
        } catch (err) {
            console.error(err.message);
            setAlert('Delete process failed. Please try again!', 'fail');
        }
    };

    // Filter recipes
    const setRecipeFilter = filter => {
        dispatch({
            type: SET_RECIPE_FILTER,
            payload: filter
        });
    };

    // Clear filter
    const clearRecipeFilter = () => {
        dispatch({
            type: CLEAR_RECIPE_FILTER
        });
    };

    const triggerLoading = () => {
        dispatch({
            type: TRIGGER_LOADING
        });
    };

    return (
        <RecipeContext.Provider
            value={{
                publicRecipes: state.publicRecipes,
                ownRecipes: state.ownRecipes,
                loading: state.loading,
                filteredRecipes: state.filteredRecipes,
                filterText: state.filterText,
                addRecipe,
                getPublicRecipes,
                getOwnRecipes,
                deleteRecipe,
                updateRecipe,
                setRecipeFilter,
                clearRecipeFilter,
                triggerLoading,
                uploadPicture
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    );
};

export default RecipeState;
