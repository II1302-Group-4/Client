import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="text-center my-4">
            <form>
                <div >
                    <input type="email" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="InputEmail" placeholder="name@kth.se" />
                    <input type="password" className="formStyle shadow-sm px-3 mb-4 bg-white rounded" id="InputPassword" placeholder="*******" />
                    <Link to="/monitor">
                        <button type="submit" className="btn btn-outline-light" id="loginButton">LOGIN</button>
                    </Link>
                </div>
            </form>
        </div>

    )
}

export default Login