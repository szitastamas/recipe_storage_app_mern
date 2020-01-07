import React,  { useState } from 'react'
import AuthContext from '../../contexts/auth/AuthContext';

export const Logout = (props) => {

    const [countdown, setCountdown] = useState(5)

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
