import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    {/*
    const [email, setEmail] = useState("");
    onChange={(e) => setEmail(e.target.value)}
    handleSubmit
    */
}
    return (
        <div className="text-center my-4">
            <form>
                <div >
                    <input type="email" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="InputEmail" placeholder="work email" />
                    <input type="password" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="decidePassword" placeholder="password" />
                    <input type="password" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="confirmPassword" placeholder="confirm password" />
                    <Link to="/monitor">
                        <button type="submit" className="btn btn-outline-light" id="loginButton">REGISTER</button>
                    </Link>
                </div>
            </form>
        </div>

    )
}

export default Register