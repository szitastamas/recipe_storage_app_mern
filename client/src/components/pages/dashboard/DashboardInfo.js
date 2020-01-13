import React, { Fragment } from 'react';

const DashboardInfo = () => {
    return (
        <Fragment>
            <ul className='collection'>
                <li className='collection-item avatar'>
                    <i className='material-icons circle teal'>add</i>
                    <span className='title teal-text'>Adding a recipe</span>
                    <p style={{ marginTop: '.6rem' }}>
                        You can simply add a recipe by typing in its title and some description. If no photo chosen, a default picture will be
                        attached.
                    </p>
                </li>
                <li className='collection-item avatar'>
                    <i className='material-icons circle green lighten-2'>edit</i>
                    <span className='title green-text'>Update recipe</span>
                    <p style={{ marginTop: '.6rem' }}>
                        You can simply update a recipe by clicking on the Edit button. Change the desired properties and click Save or discard any
                        changes by clicking Cancel.
                    </p>
                </li>
                <li className='collection-item avatar'>
                    <i className='material-icons circle red lighten-2'>delete</i>
                    <span className='title red-text'>Delete recipe</span>
                    <p style={{ marginTop: '.6rem' }}>
                        Click on the Delete button to delete a recipe. Warning: this action cannot be reversed so make sure that you want to delete
                        it!
                    </p>
                </li>
            </ul>
        </Fragment>
    );
};

export default DashboardInfo;
