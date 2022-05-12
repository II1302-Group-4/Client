import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signIn } from '../redux/actions/authActions'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginError = useSelector(state => state.auth.signinError)
    
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(signIn(email, password));
    }

    return (
        <div className="text-center my-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <input type="email" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="InputEmail" placeholder="name@kth.se" 
                    onChange = {e => setEmail(e.target.value)}/>
                <input type="password" className="formStyle shadow-sm px-3 mb-3 bg-white rounded" id="InputPassword" placeholder="*******" 
                    onChange={e => setPassword(e.target.value)}/>
                <p className="error">{loginError? <><p>{loginError}</p></> : <></>}</p>
                <button className="btn btn-outline-light" id="loginButton"
                    onClick={() => handleSubmit()}>LOGIN</button>
            </div>
        </div>
    )
}

export default Login