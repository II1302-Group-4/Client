import React from 'react'
import test_logo from "./img/test_logo.png"
const Landing = () => {
    return (
        <>
            <div className="d-flex flex-column bd-highlight my-5">
                <img src={test_logo} alt="PolluSense Logo"/>
                <h2 class="mb-4">The fast and simple way of checking for dangerous VOC levels</h2>
                <hr class="my-5"/>
                <form >
                    <div class="form-group text-center my-4">
                        <input type="email" class="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputEmail" placeholder="name@kth.se"/>
                        <input type="password" class="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputPassword" placeholder="*******"/>
                        <button type="submit" class="btn btn-outline-secondary">LOGIN</button>
                    </div>
                </form>
                
            </div>
        </>
    )
}

export default Landing;