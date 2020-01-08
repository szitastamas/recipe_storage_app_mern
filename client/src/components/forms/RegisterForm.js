import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../contexts/alert/AlertContext';
import AuthContext from '../../contexts/auth/AuthContext';

const RegisterForm = (props) => {

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { register, clearErrors, error, isAuthenticated, loadUser } = authContext;

    useEffect( () => {

        loadUser();
        if(isAuthenticated){
            props.history.push("/dashboard")
        }

        if(error === 'User already exists.'){
            setAlert(error, "fail");
            clearErrors();
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [registerData, setRegisterData] = useState({
            name: '',
            email: '',
            password: '',
            password2: ''
    })

    const { name, email, password, password2 } = registerData;

    const handleChange = e => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = (e) => {

        if(name === '' || email === '' || password === ''){
            setAlert("Please fill in all fields", "fail");
            e.preventDefault();
        }
        else if(password !== password2 || password.length < 6){
            setAlert("Passwords do not match or are shorter than 6 characters.", "fail")
            e.preventDefault();
        }
        else{
            e.preventDefault();
            register({
                    name,
                    email,
                    password
            })
        }
    }

    return (
        <div className="container form-container">
            <h3 className="card-title teal-text flow-text">Create an account</h3>
            <form onSubmit={handleLoginSubmit} className="center">
                <div className="input-field">
                    <input type="text" name="name" id="name" value={name} onChange={handleChange}/>
                    <label htmlFor="name">Full Name</label>
                </div>
                <div className="input-field">
                    <input type="email" name="email" id="email" value={email} onChange={handleChange}/>
                    <label htmlFor="email">E-mail Address</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password2" id="password2" value={password2} onChange={handleChange}/>
                    <label htmlFor="password2">Confirm Password</label>
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
            <br/>
        </div>
    )
}

export default RegisterForm;