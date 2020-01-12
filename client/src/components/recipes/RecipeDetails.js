import React, { useEffect } from 'react';

const RecipeDetails = ({ recipe, removeDetails }) => {
	const { title, description, type, privacy, date, picture } = recipe;

	useEffect(() => {
		document.querySelector('.overlay').addEventListener('click', (e) => {
			if (e.target === e.currentTarget) {
				removeDetails();
			}
		});

		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				removeDetails();
			}
		});
	});

	return (
		<div id='recipe-detail-modal'>
			<div className='overlay'>
				<div className='card horizontal' id='recipe-details-card'>
					<div className='card-stacked'>
						<div className='card-content'>
							<h4 className='teal-text'>{title}</h4>
							<hr />
							<p style={{ padding: '2rem 0' }}>{description}</p>
						</div>
						<div className='card-action'>
							<div className='row'>
								<div className='col s4'>
									<strong>Type of dish: </strong>
									{type}
								</div>
								<div className='col s4'>
									<strong>Privacy settings: </strong>
									{privacy}
								</div>
								<div className='col s4'>
									<strong>Created on: </strong>
									{date.slice(0, 10)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
