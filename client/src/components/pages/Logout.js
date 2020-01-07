import React,  { useState, useContext, useEffect } from 'react'
import AlertContext from '../../contexts/alert/AlertContext';

export const Logout = (props) => {

    useEffect(() => {
        alertContext.setAlert("Logged out successfully", "success", 5000);
        // eslint-disable-next-line
    }, []);

    const countdown = 5;
    const alertContext = useContext(AlertContext)

    const redirecting = () => {
        setTimeout(() => {
            props.history.push("/");
        }, countdown*1000)
    }

    redirecting();

    return (
        <div className="container center">
            <br />
            <h4 className="teal-text">Thank you for visiting the Recipe Storage App.</h4>
            <p>I hope to see you again soon!</p>
            <p>Redirecting to home page after {countdown} seconds...</p>
        </div>
    )
}
