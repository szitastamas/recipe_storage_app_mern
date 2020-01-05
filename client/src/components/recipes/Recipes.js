import React, { useContext, Fragment } from "react";
import RecipeContext from "../../contexts/recipe/RecipeContext";
import RecipeItem from "./RecipeItem";

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;

  // const title = isAuth
  //   ? "You can see all your uploaded recipes here"
  //   : "Most recently uploaded public recipes";

  const title = "Most recently uploaded public recipes"

  const filteredRecipes =  recipes.filter(r => r.privacy !== "private");

  return (
    <Fragment>
      <h2 className="flow-text">{title}</h2>
      <div className="home-recipe-grid">
        {filteredRecipes.map((recipe, index) => {
          return <RecipeItem key={recipe.id} recipe={recipe} index={index} />;
        })}
      </div>
    </Fragment>
  );
};

export default Recipes;
