import React from 'react'
const Taskbar = () => {
    return (
        <>
            <div className="row p-3 mb-2 bg-info text-white">
                <div className="col">
                    <h3 onClick={() => window.location.pathname = "/"}>PolluSense</h3>

                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-light currentDataButton" onClick={() => window.location.pathname = "/presentdata"} >Current data</button>

                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-outline-light logInButton">Log in</button>
                </div>
            </div>
        </>
    )
}

export default Taskbar
