import React, { useContext, Fragment } from "react";
import RecipeContext from "../../contexts/recipe/RecipeContext";
import RecipeItem from "./RecipeItem";
import LoadingDiv from "../utlity/LoadingDiv";

const Recipes = ({ customGrid, title, recipes }) => {
  const recipeContext = useContext(RecipeContext);
  const { loading } = recipeContext;
  return (
    <Fragment>
      <div className="col s12 m8 text-right">
        <h2 className="flow-text card-title teal-text text-lighten-2">
          {title}
        </h2>
      </div>
      {!loading ? (
        <div className={customGrid}>
          {recipes.map((recipe, index) => {
            return (
              <RecipeItem key={recipe._id} recipe={recipe} index={index} />
            );
          })}
        </div>
      ) : (
        <LoadingDiv />
      )}
    </Fragment>
  );
};

export default Recipes;
