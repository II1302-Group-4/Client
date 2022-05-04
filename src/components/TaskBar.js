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
                    <Link to="/Monitor">
                       <button type="button" className="btn"> <div class="fat"> Monitor </div></button>
                   </Link>
                </div>

                <div className="col-1 p-3">
                    <Link to="/about">
                        <button type="button" className="btn"><div class="fat"> About </div> </button>
                    </Link>
                </div>

                <div className="col p-3">
                  <Link to="/HowTo">
                     <button type="button" className="btn"><div class="fat"> How to </div></button>
                  </Link>
                  </div>

                {/* <div className="col p-3">
             <button type="button" className="btn btn-outline-dark currentDataButton" onClick={() => window.location.pathname = "/presentdata"}>Current data</button>
             </div> */}

                <div className="col-1 p-3">
                <Link to="/LogIn">
                    <button type="button" className="btn btn-outline-dark logInButton"> Log out </button>
                </Link>
                </div>
            </div>
        </>
    )
}

export default TaskBar


