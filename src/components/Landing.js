import React from 'react'
import logo from "./img/LOGO2.png"
const Landing = () => {
    return (
        <>
            <div className="d-flex flex-column bd-highlight mt-5">
                <img src={logo} class="img-fluid mx-auto logo" alt="PolluSense Logo"/>
                <h2 class="mb-4 text-center">The fast and simple way of checking for dangerous VOC levels</h2>
                <hr class="my-5"/>
                <form>
                    <div class="text-center my-4">
                        <input type="email" class="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputEmail" placeholder="name@kth.se"/>
                        <input type="password" class="form-control formInput shadow-sm p-2 mb-4 bg-white rounded" id="InputPassword" placeholder="*******"/>
                            <button type="submit" class="btn btn-outline-secondary ">LOGIN</button>
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