import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div >
            <form>
                <div >
                    <input type="email" className="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputEmail" placeholder="name@kth.se" />
                    <input type="password" className="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputPassword" placeholder="*******" />
                    <Link to="/data">
                        <button type="submit" className="btn btn-outline-secondary ">LOGIN</button>
                    </Link>
                </div>
            </form>
        </div>

    )
}

export default Login