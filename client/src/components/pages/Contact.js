import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='container'>
            <div className='collection with-header'>
                <h4 className='collection-header'>Contact Details</h4>
                <Link to='#' className='collection-item'>
                    Facebook
                </Link>
                <Link to='#' className='collection-item'>
                    LinkedIn
                </Link>
                <Link to='#' className='collection-item'>
                    GitHub
                </Link>
            </div>
        </div>
    );
};

export default Contact;
