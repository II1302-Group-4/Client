import React from 'react'
import img from "../utils/img/LOGO1.png"
import { Link } from 'react-router-dom'
import { signOut } from '../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const TaskBar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="row bg-info text-white">
                <div class="col-md-3 p-4" >
                    <Link to="/monitor" id="img">
                        <h3> <img src={img} width="260" alt="" /> </h3>
                    </Link>
                </div>
                <div class="col-md-2">
                    <Link to="/monitor" id="monitorLink">
                        <button className="btn-xl"> <div className="fat" id="test"> Monitor </div></button>
                    </Link>
                </div>
                <div class="col-md-2">
                    <Link to="/about" id="aboutLink">
                        <button className="btn-xl"><div className="fat"> About </div> </button>
                    </Link>
                </div>
                <div class="col-md-2">
                    <Link to="/guide" id="guideLink">
                        <button className="btn-xl"> <div className="fat">Guide</div></button>
                    </Link>
                </div>

                <div class="col-md-3 center"  >
                    <button onClick={() => dispatch(signOut())} type="button" className="btn btn-outline-dark logInButton margin3" id="logOutButtonLink"> Log out </button>
                </div>
            </div>
        
        </>
    )
}

export default TaskBar


