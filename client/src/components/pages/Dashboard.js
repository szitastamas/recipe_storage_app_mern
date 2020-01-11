import React, { useEffect, useContext } from 'react';
import Recipes from '../recipes/Recipes';
import AuthContext from '../../contexts/auth/AuthContext';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import AddRecipeForm from '../forms/AddRecipeForm';
import DashboardInfo from './dashboard/DashboardInfo';
import LoadingDiv from '../utlity/LoadingDiv';
// import AlertContext from "../../contexts/alert/AlertContext";
const Dashboard = () => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loadUser } = authContext;

	const recipeContext = useContext(RecipeContext);
	const { getOwnRecipes, ownRecipes, loading } = recipeContext;

	useEffect(() => {
		loadUser();
		getOwnRecipes();

		// eslint-disable-next-line
	}, [isAuthenticated, loading]);

	return (
		<div className='col s12 l6'>
			<h1 className='flow-text teal-text'>Your personal Recipe Storage</h1>
			<div className='row'>
				<div className='col s12 m6'>
					<DashboardInfo />
				</div>
				<div className='col s12 m6'>
					<div className='container'>
						<AddRecipeForm />
					</div>
				</div>
			</div>
			{loading ? (
				<LoadingDiv />
			) : ownRecipes.length > 0 ? (
				<Recipes customGrid='dashboard-recipe-grid' title="Check all your own recipes" recipes={ownRecipes}/>
			) : (
				<p className='center' style={{ padding: '2rem' }}>
					Your Recipe Storage is empty. Upload some of your favourite recipes today!
				</p>
			)}
		</div>
	);
};

export default Dashboard;
