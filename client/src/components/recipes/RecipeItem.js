import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import AuthContext from '../../contexts/auth/AuthContext';

const RecipeItem = ({ recipe, index, showDetails }) => {
	const recipeContext = useContext(RecipeContext);
	const { deleteRecipe } = recipeContext;

	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const handleDelete = () => {
		deleteRecipe(recipe._id);
	};

	return (
		<div className='col s4'>
			<div className='card recipe-card' style={{ animationDelay: index * 70 + 'ms' }}>
				<div className='card-image'>
					<img src='./img/egg.jpg' alt='some picture' />
					<span className='card-title' style={capitalize}>
						{recipe.title}
					</span>
				</div>
				<div className='card-content'>
					<p className='teal-text right' style={capitalize}>
						{recipe.type}
					</p>
					<span>Created on {recipe.date.slice(0, 10).replace(/-/g, '/')}</span>
				</div>
				<div className='card-action grey darken-3'>
					<Link to={`#`} onClick={() => showDetails(recipe)} className='card-btn-read-more white-text'>
						Read More
					</Link>
					{user && user._id === recipe.user && (
						<button
							className='btn card-btn-delete small'
							onClick={handleDelete}
							style={{ marginLeft: '4rem' }}
						>
							Delete
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
