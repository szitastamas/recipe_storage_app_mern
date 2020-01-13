import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <h2 className='teal-text center'>About the Recipe Storage App</h2>

            <br />
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title teal-text' style={{ padding: '2rem 1rem 0 1rem' }}>
                        Features
                    </h5>
                </div>
                <div className='card-content'>
                    <ul className='collection'>
                        <li className='collection-item avatar'>
                            <i className='material-icons circle teal'>account_circle</i>
                            <span className='title teal-text'>Registration and login</span>
                            <p style={{ marginTop: '.6rem' }}>
                                Users can register with their name and e-mail address. The authentication is being handled with Express via JWT.
                            </p>
                            <p>
                                Users can log in using their e-mail address. Once the login data has been verified the user will be redirected to the
                                personal Dashboard page.
                            </p>
                        </li>
                        <li className='collection-item avatar'>
                            <i className='material-icons circle blue lighten-2'>add_a_photo</i>
                            <span className='title  blue-text'>Upload public / private recipes</span>
                            <p style={{ marginTop: '.6rem' }}>
                                I have no idea why anyone would create a private recipe but the opportunity is given. Maybe someone has a good
                                meth-cookie recipe or idk :)
                            </p>
                            <p>
                                The recipes will be stored in the Cloud MongoDB Database and will be fetched on the Home page and on the Dashboard.
                                The user can also upload a picture of the food.
                            </p>
                        </li>
                        <li className='collection-item avatar'>
                            <i className='material-icons circle orange lighten-2'>add_to_queue</i>
                            <span className='title  orange-text'>Dashboard</span>
                            <p style={{ marginTop: '.6rem' }}>All users have a personal tab where they can check their public and private recipes.</p>
                            <p>Recipes can be added, updated and deleted from here. Apart from that all personal infos can be seen on this page.</p>
                        </li>
                        <li className='collection-item avatar'>
                            <i className='material-icons circle green lighten-2'>brush</i>
                            <span className='title  green-text'>Design</span>
                            <p style={{ marginTop: '.6rem' }}>The smooth general design of the application has been created with Materialize CSS.</p>
                            <p>I added custom animations as well. The loader components and fading elements got their styles from little old me ;)</p>
                        </li>
                    </ul>
                </div>
                <div className='card-action'>
                    <p className='center'>
                        This application has been built on the MERN-Stack - ReactJS on the Front-End, NodeJS (Express) on the Back-End and MongoDB (in
                        the Cloud) as a database.
                    </p>
                </div>
            </div>
            <div className='card horizontal'>
                <div className='card-image'>
                    <img src='./img/portrait.jpg' />
                </div>
                <div className='card-stacked'>
                    <div className='card-content'>
                        <h4 className='teal-text'>About me</h4>
                        <hr />
                        <p>
                            I am Tamas Szitas. At the time of creating this app I was attending the IT-Academy Dr Heuer in Bochum, Germany (January
                            2020). I am aiming to become a professional Web-Developer. I started learning React in December 2019 and I find React an
                            incredibly exciting and awesome library to use and to learn. My current goal is to have the MERN-Stack under my belt.
                        </p>
                    </div>
                    <div className='card-action'>
                        <p className='left' style={{ fontWeight: '600' }}>
                            Reach out!
                        </p>
                        <Link to='#!' className='blue-text text-darken-3 large fb-btn right' style={{ fontSize: '2rem' }}>
                            <i className='fab fa-facebook'></i>
                        </Link>
                        <Link to='#!' className='grey-text text-darken-3 large fb-btn right' style={{ fontSize: '2rem' }}>
                            <i className='fab fa-github'></i>
                        </Link>
                        <Link to='#!' className='blue-text text-darken-1 large fb-btn right' style={{ fontSize: '2rem' }}>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
