import React, { useContext, useEffect, Fragment } from 'react';
import Recipes from '../recipes/Recipes';
import AuthContext from '../../contexts/auth/AuthContext';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import LoadingDiv from '../utlity/LoadingDiv';
import SearchBar from '../utlity/SearchBar';
import { LoadTheme } from '../theme/LoadTheme';

// import AlertContext from '../../contexts/alert/AlertContext';
const Home = () => {
    const authContext = useContext(AuthContext);
    const { loadUser, isAuthenticated } = authContext;
    const activeTheme = LoadTheme();
    const { mainTextColor } = activeTheme;

    const recipeContext = useContext(RecipeContext);
    const { getPublicRecipes, publicRecipes, filterText, filteredRecipes, loading, triggerLoading } = recipeContext;

    useEffect(() => {
        triggerLoading();
        loadUser();
        getPublicRecipes();

        // eslint-disable-next-line
    }, [isAuthenticated]);

    const activeRecipes = filterText.length === 0 ? publicRecipes : filteredRecipes;

    return (
        <div className='col s12 l6'>
            <SearchBar />
            {loading ? (
                <LoadingDiv loaderType='spinner' />
            ) : activeRecipes.length === 0 ? (
                <h4 className={`${mainTextColor} center`}>No recipes found...</h4>
            ) : (
                <Fragment>
                    {!isAuthenticated && (
                        <h6 className='teal-text flow-text' style={{ fontStyle: 'italic' }}>
                            Note: you have to be logged in to upload / manage your recipes
                        </h6>
                    )}
                    <Recipes customGrid='home-recipe-grid' title='The most recently uploaded public recipes' recipes={activeRecipes} />
                </Fragment>
            )}
        </div>
    );
};

export default Home;
