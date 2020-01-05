import React, { useContext, Fragment, useEffect } from "react";
import RecipeContext from "../../contexts/recipe/RecipeContext";
import RecipeItem from "./RecipeItem";
import AuthContext from "../../contexts/auth/AuthContext";
import LoadingDiv from "../utlity/LoadingDiv";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);
  const authContext = useContext(AuthContext);
  const { recipes, getPublicRecipes, loading } = recipeContext;
  // const { isAuthenticated } = authContext;

  useEffect(() => {
    getPublicRecipes();
    // eslint-disable-next-line
  }, []);
  // const title = isAuth
  //   ? "You can see all your uploaded recipes here"
  //   : "Most recently uploaded public recipes";

  const title = "Most recently uploaded public recipes";

  return (
    <Fragment>
      <h2 className="flow-text">{title}</h2>
      {loading ? (
        <LoadingDiv />
      ) : (
        <div className="home-recipe-grid">
          {recipes.map((recipe, index) => {
            return <RecipeItem key={recipe.id} recipe={recipe} index={index} />;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Recipes;
