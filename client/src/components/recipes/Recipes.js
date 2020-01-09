import React, { useContext, Fragment, useState } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import RecipeItem from './RecipeItem';

const Recipes = ({ location, customGrid }) => {
	const recipeContext = useContext(RecipeContext);
	const { recipes, loading } = recipeContext;

	const [filter, setFilter] = useState('');

	const setTitle = () => {
		switch (location) {
			case 'home':
				return 'The most recently uploaded public recipes';
			case 'dashboard':
				return 'Check all your own recipes';
			default:
				return 'Recipes';
		}
	};

	const handleChange = (e) => {
		setFilter(e.target.value);
	};

	let title = setTitle();
	return (
		<Fragment>
			<div className='row'>
				<div className='col s12 m4'>
					<div className='input-field'>
						<input type='text' name='filter' id='filter' value={filter} onChange={handleChange} />
						<label htmlFor='filter'>Type in keywords to filter recipes</label>
					</div>
					<button className='btn blue lighten-2'>Search</button>
					<button className='btn teal right'>Clear</button>
				</div>
				<div className='col s12 m8 text-right'>
					<h2 className='flow-text card-title teal-text text-lighten-2'>{title}</h2>
				</div>
			</div>

			{!loading && (
				<div className={customGrid}>
					{recipes.map((recipe, index) => {
						return <RecipeItem key={recipe._id} recipe={recipe} index={index} />;
					})}
				</div>
			)}
		</Fragment>
	);
};

export default Recipes;
