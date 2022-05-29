import React, {useState} from 'react'
import Logo from '../components/Logo'
import Login from '../components/Login'
import Register from '../components/Register'
const LandingPage = () => {
    const [formMode, setFormMode] = useState("Login")
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center image">
                <Logo />
                {formMode === "Login"? 
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <Login/>
                        <button onClick={() => {setFormMode("Register")}} className="btn btn-link link-light">Register</button>
                    </div>
                :
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <Register/>
                        <button onClick={() => setFormMode("Login")} className="btn btn-link link-light">Login</button>
                    </div>
                }
            </div>
        </>
    )
}
export default LandingPage