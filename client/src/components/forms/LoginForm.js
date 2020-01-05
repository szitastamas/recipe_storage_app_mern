import React, { useState } from 'react'

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
            email: '',
            password: ''
    })

    const handleChange = e => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container form-container">
            <form onSubmit={handleLoginSubmit}>
                <div className="input-field">
                    <input type="email" name="email" id="email" value={loginData.email} onChange={handleChange}/>
                    <label htmlFor="email">E-mail Address</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password" id="password" value={loginData.password} onChange={handleChange}/>
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn">Log in</button>
            </form>
        </div>
    )
}

export default LoginForm;