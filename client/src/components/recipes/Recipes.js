import React, { useContext, Fragment, useEffect } from "react";
import RecipeContext from "../../contexts/recipe/RecipeContext";
import RecipeItem from "./RecipeItem";
import AuthContext from "../../contexts/auth/AuthContext";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);
  const authContext = useContext(AuthContext)
  const { recipes, getPublicRecipes, loading } = recipeContext;
 // const { isAuthenticated } = authContext;

  useEffect(() => {
    getPublicRecipes();
    // eslint-disable-next-line
  },[])
  // const title = isAuth
  //   ? "You can see all your uploaded recipes here"
  //   : "Most recently uploaded public recipes";

  const title = "Most recently uploaded public recipes"

  const recipeListOrLoading =  loading ? "Loading..." : recipes.map((recipe, index) => {
      return <RecipeItem key={recipe._id} recipe={recipe} index={index} />;
    })

  return (
    <Fragment>
      <h2 className="flow-text">{title}</h2>
      <div className="home-recipe-grid">
        {recipeListOrLoading}
      </div>
    </Fragment>
  );
};

export default Recipes;
