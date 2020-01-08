import React, { useContext, Fragment, useEffect } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import RecipeItem from './RecipeItem';

const Recipes = ({ location, customGrid }) => {
    const recipeContext = useContext(RecipeContext);
    const { recipes,  loading } = recipeContext;

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

    let title = setTitle();
    return (
        <Fragment>
            <h2 className='flow-text card-title teal-text text-lighten-2'>{title}</h2>
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
