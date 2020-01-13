import React, { useState, useContext } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import { LoadTheme } from '../theme/LoadTheme';

export const SearchBar = () => {
    const recipeContext = useContext(RecipeContext);
    const { setRecipeFilter } = recipeContext;

    const [filter, setFilter] = useState('');
    const handleChange = e => {
        setFilter(e.target.value);
        setRecipeFilter(e.target.value);
    };

    const activeTheme = LoadTheme();

    return (
        <div className='row'>
            <div className='col s12 m4'>
                <div className='input-field'>
                    <input
                        type='text'
                        name='filter'
                        id='filter'
                        value={filter}
                        onChange={handleChange}
                        className={`${activeTheme.secondaryTextColor}`}
                    />
                    <label htmlFor='filter'>Type in keywords to filter recipes</label>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
