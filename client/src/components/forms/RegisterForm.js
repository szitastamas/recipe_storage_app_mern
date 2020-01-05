import React, { useState } from 'react'

const RegisterForm = () => {

    const [registerData, setRegisterData] = useState({
            name: '',
            email: '',
            password: '',
            password2: ''
    })

    const handleChange = e => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(registerData)
    }

    return (
        <div className="container form-container">
            <form onSubmit={handleLoginSubmit}>
                <div className="input-field">
                    <input type="text" name="name" id="name" value={registerData.name} onChange={handleChange}/>
                    <label htmlFor="name">Full Name</label>
                </div>
                <div className="input-field">
                    <input type="email" name="email" id="email" value={registerData.email} onChange={handleChange}/>
                    <label htmlFor="email">E-mail Address</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password" id="password" value={registerData.password} onChange={handleChange}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password2" id="password2" value={registerData.password2} onChange={handleChange}/>
                    <label htmlFor="password2">Confirm Password</label>
                </div>
                <button type="submit" className="btn">Log in</button>
            </form>
        </div>
    )
}

export default RegisterForm;