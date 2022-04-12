import React from 'react'
const Taskbar = () => {


    return (
        <>

            <div className="container-fluid">
                <div className="row p-3 mb-2 bg-info text-white">
                    <div className="col col-sm-7"><h3>PolluSense</h3>  </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-outline-light currentDataButton" onClick={() => window.location.pathname = "/presentdata"} >Current data</button>
                        <button type="button" className="btn btn-outline-light logInButton">Log in</button>

                    </div>
                    <div className="col-auto">
                    </div>


                </div>
            </div>
        </>
    )
}

export default Taskbar
