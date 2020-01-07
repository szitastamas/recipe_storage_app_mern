import React, { useContext, Fragment, useEffect } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import RecipeItem from './RecipeItem';
import AuthContext from '../../contexts/auth/AuthContext';
import LoadingDiv from '../utlity/LoadingDiv';

const Recipes = props => {
    const recipeContext = useContext(RecipeContext);
    const { recipes, getPublicRecipes, loading } = recipeContext;
    // const { isAuthenticated } = authContext;

    useEffect(() => {
        getPublicRecipes();
        // eslint-disable-next-line
    }, []);

    const setTitle = () => {
        switch (props.location) {
            case 'home':
                return 'The most recently uploaded public recipes';
            case 'dashboard':
                return 'Check all your own recipes';
            default:
                return 'Recipes';
        }
    };

    let title = setTitle();
    return (
        <Fragment>
            <h2 className='flow-text card-title teal-text text-lighten-2'>{title}</h2>
            {loading ? (
                <LoadingDiv loaderType='spinner' />
            ) : (
                <div className={props.customClassName}>
                    {recipes.map((recipe, index) => {
                        return <RecipeItem key={recipe._id} recipe={recipe} index={index} />;
                    })}
                </div>
            )}
        </Fragment>
    );
};

export default Recipes;
