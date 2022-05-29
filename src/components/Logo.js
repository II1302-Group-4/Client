import React from 'react'
import logo from "../utils/img/LOGO2.png"
const Logo = () => {
    return (
        <>
            <div className="d-flex flex-column bd-highlight mt-5">
                <img src={logo} className="mx-auto logo" alt="PolluSense Logo" />
                <h2 className="my-4 text-center">The fast and simple way of checking for unhealthy VOC and CO2 levels</h2>
                <hr className="my-3" />
            </div>
        </>
    )
}
export default Logo;