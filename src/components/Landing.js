import React from 'react'
import logo from "../utils/img/LOGO2.png"
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
        <>
            <div className="d-flex flex-column bd-highlight mt-5">
                <img src={logo} className="mx-auto logo" alt="PolluSense Logo" />
                <h2 className="my-4 text-center">The fast and simple way of checking for unhealthy VOC and CO2 levels</h2>
                <hr className="my-4" />
                <form>
                    <div className="text-center my-4">
                        <input type="email" className="formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputEmail" placeholder="name@kth.se" />
                        <input type="password" className="formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputPassword" placeholder="*******" />
                        <Link to="/monitor">
                            <button type="submit" className="btn btn-outline-secondary" id="loginButton">LOGIN</button>
                        </Link>
                    </div>
                </form>

            </div>

            {/*
                <form >
                    <div class="form-group text-center my-4">
                        <input type="email" class="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputEmail" placeholder="name@kth.se"/>
                        <input type="password" class="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputPassword" placeholder="*******"/>
                        <button type="submit" class="btn btn-outline-secondary">LOGIN</button>
                    </div>
                </form>          
*/}
        </>
    )
}

export default Landing;