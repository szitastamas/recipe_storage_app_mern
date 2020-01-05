import React from "react";
import Recipes from "../recipes/Recipes";
import RecipeContext from "../../contexts/recipe/RecipeContext";

const Home = () => {

  return (
    <div>
        <div className="col s12 l6">
            <Recipes />
        </div>
    </div>
  );
};

export default Home;
