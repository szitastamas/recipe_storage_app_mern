import React, { Fragment, useContext, useState, useEffect } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import { LoadTheme } from '../theme/LoadTheme';

export const RecipeForm = ({ recipeToEdit, cancel }) => {
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

    const [editState, setEditState] = useState(false);
    const [pic, setPic] = useState({});

    useEffect(() => {
        recipeToEdit && setRecipe({ ...recipeToEdit });
        recipeToEdit && setEditState(true);
        // eslint-disable-next-line
    }, [recipeToEdit]);
    const recipeContext = useContext(RecipeContext);

    const { addRecipe, updateRecipe } = recipeContext;

    const handleSubmit = e => {
        e.preventDefault();

        editState ? updateRecipe(recipe) : addRecipe(recipe);
        resetForm();
    };

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        });
    };

    const handleFile = e => {
        setPic(e.target.files[0]);
    };

    const handleCancel = () => {
        cancel();
        resetForm();
    };

    const resetForm = () => {
        setRecipe({
            title: '',
            description: '',
            type: 'soup',
            privacy: 'public',
            date: new Date()
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, '.'),
            pic: {}
        });

        setEditState(false);
    };

    const activeTheme = LoadTheme();
    const { secondaryTextColor, uiColor } = activeTheme;

    return (
        <Fragment>
            <form id='add-form center' onSubmit={handleSubmit}>
                <div className='input-field'>
                    <input type='text' name='title' value={recipe.title} onChange={handleChange} className={`${secondaryTextColor}`} />
                    <label htmlFor='title'>Title</label>
                </div>
                <div className='input-field'>
                    <input type='text' name='description' value={recipe.description} onChange={handleChange} className={`${secondaryTextColor}`} />
                    <label htmlFor='description'>Description</label>
                </div>
                <div className='row'>
                    <div className='col s6'>
                        <label htmlFor='type' className='left'>
                            Food type select
                        </label>
                        <select name='type' value={recipe.type} onChange={handleChange} className={`${uiColor} ${secondaryTextColor}`}>
                            <option value='soup'>Soup</option>
                            <option value='main'>Main</option>
                            <option value='dessert'>Dessert</option>
                        </select>
                    </div>
                    <div className='col s6'>
                        <label htmlFor='privacy' className='left'>
                            Privacy option select
                        </label>
                        <select name='privacy' value={recipe.privacy} onChange={handleChange} className={`${uiColor} ${secondaryTextColor}`}>
                            <option value='public'>Public</option>
                            <option value='private'>Private</option>
                        </select>
                    </div>
                </div>
                {!editState ? (
                    <Fragment>
                        <div className='file-field input-field'>
                            <div className='btn'>
                                <span>File</span>
                                <input type='file' name='pic' onChange={handleFile} />
                            </div>
                            <div className='file-path-wrapper'>
                                <input type='text' className={`file-path validate ${uiColor} ${secondaryTextColor}`} placeholder='Upload photo' />
                            </div>
                        </div>
                        <button type='submit' className='btn submit-btn waves-effect waves-light'>
                            Add Recipe
                        </button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <button type='submit' className='btn submit-btn green lighten-1 waves-effect waves-light'>
                            Update Recipe
                        </button>
                        <button onClick={handleCancel} className='btn submit-btn orange lighten-3 waves-effect waves-light'>
                            Cancel
                        </button>
                    </Fragment>
                )}
            </form>
            <div className='progress-bar-container'>
                <div className='progress-bar'></div>
            </div>
        </Fragment>
    );
};

export default RecipeForm;
