import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadTheme } from '../theme/LoadTheme';

const RecipeDetails = ({ recipe, removeDetails }) => {
	const { title, description, type, privacy, date, pic } = recipe;

	useEffect(() => {
		const closeModalOnEscape = (e) => {
			if (e.key === 'Escape') {
				removeDetails();
			}
		};

		window.addEventListener('keydown', closeModalOnEscape);

		return () => window.removeEventListener('keydown', closeModalOnEscape);
	});

	const activeTheme = LoadTheme();

	const { uiColor, secondaryTextColor } = activeTheme;

	const isHorizontalCard = window.innerWidth > 1000 ? 'horizontal' : '';

	return (
		<div id='recipe-detail-modal'>
			<div className='overlay' onClick={() => removeDetails()}></div>
			<div className={`card ${isHorizontalCard} ${uiColor} ${secondaryTextColor}`} id='recipe-details-card'>
				<div className='card-image'>
					<img src={pic} alt='my uploaded food' />
				</div>
				<div className='card-stacked'>
					<div className='card-content'>
						<h4 className='teal-text'>{title}</h4>
						<p style={{ padding: '2rem 0' }}>{description}</p>
					</div>
					<div className='card-action' style={{ borderTop: `2px solid teal` }}>
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
						<Link
							to='#'
							id='close-recipe-details-btn'
							className='btn red lighten-2 right'
							onClick={() => removeDetails()}
						>
							<i className='material-icons'>close</i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
