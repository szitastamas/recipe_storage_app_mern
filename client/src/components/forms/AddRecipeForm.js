import React, { Fragment } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';

export const AddRecipeForm = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Form submitted.');
	};

	return (
		<Fragment>
			<form>
				<div className='input-field'>
					<input type='text' name='title' id='title' />
					<label htmlFor='title'>Title</label>
				</div>
				<div className='input-field'>
					<input type='text' name='description' id='description' />
					<label htmlFor='description'>Description</label>
				</div>
				<div className='row'>
					<div className='col s6'>
						<label htmlFor='type' className='left'>
							Food type select
						</label>
						<select id='type'>
							<option value='soup'>Soup</option>
							<option value='main'>Main</option>
							<option value='dessert'>Dessert</option>
						</select>
					</div>
					<div className='col s6'>
						<label htmlFor='privacy' className='left'>
							Privacy option select
						</label>
						<select id='privacy'>
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
				<button type='submit' className='teal btn' onClick={handleClick}>
					Add Recipe
				</button>
			</form>
		</Fragment>
	);
};
