import React from 'react'
import img from "../utils/img/LOGO1.png"
import { Link } from 'react-router-dom'
const TaskBar = () => {

    return (
        <>
            <div className="row p-3 bg-info text-white">
                <div className="col" >
                    <Link to="/">
                        <h3> <img src={img} width="250" alt="" /> </h3>
                    </Link>
                </div>
                <div className="col-1 p-3">
                    <Link to="/about">
                        <button type="button" className="btn"><div class="fat"> About </div> </button>
                    </Link>
                </div>
                <div className="col-1 p-3">
                    <button type="button" className="btn"><div class="fat"> How to </div></button>
                </div>
                <div className="col p-3">
                    <button type="button" className="btn"> <div class="fat"> Links </div></button>
                </div>
                <div className="col-1 p-3">
                    <button type="button" className="btn btn-outline-dark logInButton"> Log out </button>
                </div>
            </div>
        </>
    )
}

export default TaskBar


