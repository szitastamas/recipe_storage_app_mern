import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe, index }) => {
	return (
		<div className='card recipe-card' style={{ animationDelay: index * 70 + 'ms' }}>
			<div className='card-content'>
				<span className='card-title' style={capitalize}>
					{recipe.title} <span className='badge'>{recipe.type}</span>
				</span>
				<p>{recipe.description}</p>
			</div>
			<div className='card-action center teal lighten-4'>
				<span>Created on {recipe.date}</span>
			</div>
		</div>
	);
};

RecipeItem.propTypes = {
	recipe: PropTypes.object.isRequired
};

const capitalize = { textTransform: 'capitalize' };

export default RecipeItem;
