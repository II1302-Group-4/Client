import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../redux/actions/authActions'
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const registerError = useSelector(state => state.auth.signupError)
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(signUp(email, password));
    }
    return (
        <div className="text-center my-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <input type="email" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" 
                    id="registerEmail" placeholder="work email" onChange={e => setEmail(e.target.value)}/>
                <input type="password" className="formStyle shadow-sm px-3 mb-3 bg-white rounded" 
                    id="decidePassword" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                    <p className="error">{registerError? <><p>{registerError}</p></> : <></>}</p>
                <button onClick={() => handleSubmit()} className="btn btn-outline-light" 
                    id="loginButton">REGISTER</button>
            </div>
        </div>
    )
}
export default Register