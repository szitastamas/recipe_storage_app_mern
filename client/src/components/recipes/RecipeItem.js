import React from 'react';

const RecipeItem = ({ recipe, index }) => {
	return (
		<div className='card recipe-card' style={{ animationDelay: index * 70 + 'ms' }}>
			<div className='card-content'>
				<span className='card-title'>{recipe.title}</span>
				<p>{recipe.description}</p>
			</div>
			<div className='card-action center teal lighten-4'>
				<p>Created on {recipe.date}</p>
				<div className='badge green right'>{recipe.privacy === 'public' ? 'public' : 'private'}</div>
			</div>
		</div>
	);
};

export default RecipeItem;
