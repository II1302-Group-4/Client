import React from 'react'
import Logo from '../components/Logo'
import Login from '../components/Login'
import Register from '../components/Register'

const LandingPage = () => {
    return (

        <>
            <div className="d-flex flex-column justify-content-center align-items-center image">
                <Logo />
                <Register/>
            </div>
        </>
    )
}

export default LandingPage