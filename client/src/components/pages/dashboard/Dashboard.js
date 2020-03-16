import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/auth/AuthContext';
import RecipeContext from '../../../contexts/recipe/RecipeContext';
import RecipeForm from '../../forms/RecipeForm';
import DashboardInfo from './DashboardInfo';
import LoadingDiv from '../../utlity/LoadingDiv';
import RecipeDetails from '../../recipes/RecipeDetails';
import { LoadTheme } from '../../theme/LoadTheme';

// import AlertContext from "../../contexts/alert/AlertContext";
const Dashboard = () => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loadUser } = authContext;

	const recipeContext = useContext(RecipeContext);
	const { getOwnRecipes, ownRecipes, loading, triggerLoading, deleteRecipe } = recipeContext;

	useEffect(() => {
		triggerLoading();
		loadUser();
		getOwnRecipes();

		// eslint-disable-next-line
	}, [isAuthenticated]);

	const [recipeToEdit, setRecipeToEdit] = useState(null);

	const handleEdit = (recipe) => {
		setRecipeToEdit(recipe);
	};

	const [recipeDetails, setRecipeDetails] = useState(null);

	const showDetails = (recipe) => {
		setRecipeDetails(recipe);
	};

	const removeDetails = () => {
		setRecipeDetails(null);
	};

	const cancel = () => {
		setRecipeToEdit(null);
	};

	const activeTheme = LoadTheme();

	const { bgColor, secondaryTextColor } = activeTheme;

	return (
		<div className='col s12 l6'>
			<h1 className='flow-text teal-text'>Your personal Recipe Storage</h1>
			<div className='row'>
				<div className='col s12 m6'>
					<DashboardInfo />
				</div>
				<div className='col s12 m6'>
					<div className='container'>
						<RecipeForm recipeToEdit={recipeToEdit} cancel={cancel} />
					</div>
				</div>
			</div>
			{loading ? (
				<LoadingDiv loaderType='spinner' />
			) : ownRecipes.length > 0 ? (
				// <Recipes customGrid='dashboard-recipe-grid' title='Check all your own recipes' recipes={ownRecipes} />
				<ul className='collection'>
					<div className={`collection-item ${bgColor}`} key={'dashboard-list-header'}>
						<div className='row'>
							<div className='col s6 teal-text' style={{ fontWeight: '600', textTransform: 'uppercase' }}>
								Title
							</div>
							<div className={`col s3 ${secondaryTextColor}`} style={{ fontWeight: '600' }}>
								Type
							</div>
							<div className={`col s3 ${secondaryTextColor}`}></div>
						</div>
					</div>
					{ownRecipes.map((recipe) => {
						return (
							<li key={recipe._id} className={`collection-item ${bgColor}`}>
								<div className='row'>
									<div
										className='col s6 teal-text'
										style={{
											fontWeight: '600',
											textTransform: 'uppercase',
											cursor: 'pointer'
										}}
										onClick={() => showDetails(recipe)}
									>
										{recipe.title}
									</div>
									<div
										className={`col s3 ${secondaryTextColor}`}
										style={{ textTransform: 'capitalize' }}
									>
										{recipe.type}
									</div>
									<div className={`col s3 right`}>
										<Link
											to='#'
											className='secondary-content btn small red'
											onClick={() => deleteRecipe(recipe._id)}
										>
											<i className='material-icons'>delete</i>
										</Link>
										<Link
											to='#'
											className='secondary-content btn blue lighten-2'
											onClick={() => handleEdit(recipe)}
										>
											<i className='material-icons'>edit</i>
										</Link>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			) : (
				<p className={`center ${secondaryTextColor}`} style={{ padding: '2rem' }}>
					Your Recipe Storage is empty. Upload some of your favourite recipes today!
				</p>
			)}
			{recipeDetails && <RecipeDetails recipe={recipeDetails} removeDetails={removeDetails} />}
		</div>
	);
};

export default Dashboard;
