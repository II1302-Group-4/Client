import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUp } from '../redux/actions/authActions'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(signUp(email, password));
    }

    return (
        <div className="text-center my-4">
            <div >
                <input type="email" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="InputEmail" placeholder="work email" 
                    onChange={e => setEmail(e.target.value)}/>
                <input type="password" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="decidePassword" placeholder="password" 
                    onChange={e => setPassword(e.target.value)}/>
                <button onClick={() => handleSubmit()} className="btn btn-outline-light" id="loginButton">REGISTER</button>
            </div>
        </div>

    )
}

export default Register