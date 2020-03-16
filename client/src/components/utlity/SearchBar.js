import React, { useContext } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import { LoadTheme } from '../theme/LoadTheme';

export const SearchBar = () => {
	const recipeContext = useContext(RecipeContext);
	const { setRecipeFilter, clearRecipeFilter } = recipeContext;

	const handleChange = (e) => {
		if (e.target.value.length === 0 || e.target.value === ' ') {
			clearRecipeFilter();
		} else {
			setRecipeFilter(e.target.value);
		}
	};

	const activeTheme = LoadTheme();

	const { secondaryTextColor } = activeTheme;

	return (
		<div className='row'>
			<div className='col s12 m4'>
				<div className='input-field'>
					<input
						type='text'
						name='filter'
						id='filter'
						onChange={handleChange}
						className={`${secondaryTextColor}`}
					/>
					<label htmlFor='filter'>
						<span className={`left`}>
							<i className='material-icons'>search</i>
						</span>
						Enter keywords...
					</label>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
