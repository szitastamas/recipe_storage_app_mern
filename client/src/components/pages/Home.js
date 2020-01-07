import React, { useContext, useEffect } from 'react';
import Recipes from '../recipes/Recipes';
import AuthContext from '../../contexts/auth/AuthContext';
// import AlertContext from '../../contexts/alert/AlertContext';
const Home = () => {
    const authContext = useContext(AuthContext);
    const { loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className='col s12 l6'>
                <Recipes customClassName='home-recipe-grid' location='home' />
            </div>
        </div>
    );
};

export default Home;
