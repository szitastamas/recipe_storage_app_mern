import React, { useEffect } from 'react';
import { LoadTheme } from '../theme/LoadTheme';

const RecipeDetails = ({ recipe, removeDetails }) => {
    const { title, description, type, privacy, date, picture } = recipe;

    useEffect(() => {
        document.querySelector('.overlay').addEventListener('click', e => {
            if (e.target === e.currentTarget) {
                removeDetails();
            }
        });

        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                removeDetails();
            }
        });
    });

    const activeTheme = LoadTheme();

    const { uiColor, bgColor, mainTextColor, secondaryTextColor } = activeTheme;

    return (
        <div id='recipe-detail-modal'>
            <div className='overlay'>
                <div className={`card horizontal ${uiColor} ${secondaryTextColor}`} id='recipe-details-card'>
                    <div className='card-stacked'>
                        <div className='card-content'>
                            <h4 className='teal-text'>{title}</h4>
                            <p style={{ padding: '2rem 0' }}>{description}</p>
                        </div>
                        <div className='card-action' style={{borderTop: `2px solid teal`}}>
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
