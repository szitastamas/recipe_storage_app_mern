import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import AuthContext from '../../contexts/auth/AuthContext';
import { LoadTheme } from '../theme/LoadTheme';

const RecipeItem = ({ recipe, index, showDetails }) => {
	const recipeContext = useContext(RecipeContext);
	const { deleteRecipe } = recipeContext;

	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const activeTheme = LoadTheme();
	const { uiColor, bgColor, secondaryTextColor } = activeTheme;

	return (
		<div className='col s12 m4 l2'>
			<div className='card recipe-card' style={{ animationDelay: index * 70 + 'ms' }}>
				<div className='card-image'>
					<img src={recipe.pic} alt='uploaded food' />
					<span className='card-title' style={capitalize}>
						{recipe.title}
					</span>
				</div>
				<div className={`card-content ${bgColor} ${secondaryTextColor}`}>
					<p className='teal-text right' style={capitalize}>
						{recipe.type}
					</p>
					<span>{recipe.date.slice(0, 10).replace(/-/g, '/')}</span>
				</div>
				<div className={`card-action ${uiColor}`} style={{ borderTop: '2px solid teal' }}>
					<button className='btn small teal' onClick={() => showDetails(recipe)}>
						<i className='material-icons'>remove_red_eye</i>
					</button>
					{user && user._id === recipe.user && (
						<button className='btn small red right' onClick={() => deleteRecipe(recipe._id)}>
							<i className='material-icons'>delete</i>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

RecipeItem.propTypes = {
	recipe: PropTypes.object.isRequired
};

const capitalize = { textTransform: 'capitalize' };

export default RecipeItem;
