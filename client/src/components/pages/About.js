import React from 'react'

const About = () => {
    return (
        <div className="container">
            <h1 className="flow-text">About the Recipe Storage App</h1>
            <h3 className="flow-text">This is a MERN-Stack Application.</h3>
            <p>ReactJS on the Front-End, NodeJS (Express) on the Back-End and MongoDB as a database.</p>
            <p>The app allows people to sign up with their e-mail address. Authentication is done via JWT.</p>
            <p>Users can upload food recipes which can be private or public. There are 3 types of food: soup, main, dessert. Might add some more later on...</p>
        </div>
    )
}

export default About;