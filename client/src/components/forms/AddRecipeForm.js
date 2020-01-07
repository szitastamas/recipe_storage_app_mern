import React, { Fragment, useContext, useState } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';

export const AddRecipeForm = () => {
	const [recipe, setRecipe] = useState({
		title: '',
		description: '',
		type: 'soup',
		privacy: 'public',
		date: new Date()
			.toJSON()
			.slice(0, 10)
			.replace(/-/g, '.')
	});

	const recipeContext = useContext(RecipeContext);

	const { addRecipe } = recipeContext;

	const handleSubmit = (e) => {
		e.preventDefault();
		addRecipe(recipe);

		setRecipe({
			title: '',
			description: '',
			type: 'soup',
			privacy: 'public',
			date: new Date()
				.toJSON()
				.slice(0, 10)
				.replace(/-/g, '.')
		});
	};

	const handleChange = (e) => {
		setRecipe({
			...recipe,
			[e.target.id]: e.target.value
		});
	};

	return (
		<Fragment>
			<form id='add-form' onSubmit={handleSubmit}>
				<div className='input-field'>
					<input type='text' name='title' id='title' value={recipe.title} onChange={handleChange} />
					<label htmlFor='title'>Title</label>
				</div>
				<div className='input-field'>
					<input
						type='text'
						name='description'
						id='description'
						value={recipe.description}
						onChange={handleChange}
					/>
					<label htmlFor='description'>Description</label>
				</div>
				<div className='row'>
					<div className='col s6'>
						<label htmlFor='type' className='left'>
							Food type select
						</label>
						<select id='type' value={recipe.type} onChange={handleChange}>
							<option value='soup'>Soup</option>
							<option value='main'>Main</option>
							<option value='dessert'>Dessert</option>
						</select>
					</div>
					<div className='col s6'>
						<label htmlFor='privacy' className='left'>
							Privacy option select
						</label>
						<select id='privacy' value={recipe.privacy} onChange={handleChange}>
							<option value='public'>Public</option>
							<option value='private'>Private</option>
						</select>
					</div>
				</div>
				<div className='file-field input-field'>
					<div className='btn'>
						<span>File</span>
						<input type='file' name='picture' id='picture' />
					</div>
					<div className='file-path-wrapper'>
						<input type='text' className='file-path validate' placeholder='Upload photo' />
					</div>
				</div>
				<button type='submit' className='btn waves-effect waves-light'>
					Add Recipe
				</button>
			</form>
		</Fragment>
	);
};

export default AddRecipeForm;