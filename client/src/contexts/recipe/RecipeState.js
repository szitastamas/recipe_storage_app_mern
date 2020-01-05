import React, { useReducer, useEffect } from "react";
import uuid from "uuid";
import axios from "axios";
import RecipeContext from "./RecipeContext";
import RecipeReducer from "./RecipeReducer";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECIPE,
  FILTER_RECIPES,
  CLEAR_FILTER
} from "../reducerTypes";

const RecipeState = props => {
  const initialState = {
    recipes: []
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  // Add recipe
  const addRecipe = recipe => {
    recipe.id = uuid();
    dispatch({
      type: ADD_RECIPE,
      payload: recipe
    });
  };

  // const fetchPublicRecipes = async () => {
  // const res = await axios("/api/recipes/public");
  // const fetchedRecipes = await res.data;

  // fetchedRecipes.forEach(rec => {
  // 	rec.date = rec.date.slice(0,10).replace(/-/g,'.');
  // })

  // fetchedRecipes.map(rec => {
  // 	addRecipe(rec);
  // })
  // };
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
        addRecipe
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
