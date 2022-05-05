import React from 'react'
import img from "../utils/img/LOGO1.png"
import { Link } from 'react-router-dom'

const TaskBar = () => {
    return (
        <>
            <div className="row p-3 bg-info text-white">
                <div className="col" >
                    <Link to="/" id="imgHomeLink">
                        <h3> <img src={img} width="250" alt="" /> </h3>
                    </Link>
                </div>
                <div className="col-1 p-3">
                    <Link to="/monitor" id="monitorLink">
                        <button type="button" className="btn"> <div className="fat" id="test"> Monitor </div></button>
                    </Link>
                </div>
                <div className="col-1 p-3">
                    <Link to="/about" id="aboutLink">
                        <button type="button" className="btn"><div className="fat"> About </div> </button>
                    </Link>
                </div>
                <div className="col p-3">
                    <Link to="/how-to" id="howToLink">
                        <button type="button" className="btn"><div className="fat"> How to </div></button>
                    </Link>
                </div>
                <div className="col-1 p-3">
                    <Link to="/" id="logOutButtonLink">
                        <button type="button" className="btn btn-outline-dark logInButton"> Log out </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TaskBar


