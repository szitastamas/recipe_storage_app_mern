import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const RecipeItem = ({ recipe, index }) => {
  return (
    <div className="col s4">
      <div
        className="card recipe-card"
        style={{ animationDelay: index * 70 + "ms" }}
      >
		  <div className="card-image">
			  <img src="./img/egg.jpg" alt="some picture" />
			  <span className="card-title" style={capitalize}>{recipe.title}</span>
		  </div>
        <div className="card-content">
          <p className="badge" style={capitalize}>
            {recipe.type}
          </p>
          <span>Created on {recipe.date}</span>
		  
        </div>
        <div className="card-action center grey lighten-4">
		  <Link to={`#`}>
			  Read More
		  </Link>
        </div>
      </div>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
};

const capitalize = { textTransform: "capitalize" };

export default RecipeItem;
