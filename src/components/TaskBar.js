import React from 'react'
import img from './LOGO1.png'




const Taskbar = () => {

  
    return (
        <>
            <div className="row p-3 bg-info text-white">
                <div className="col" >
                    <h3 onClick={() => window.location.pathname = "/"}> <img src={img} width="250" alt=""/> </h3>
                </div>

                {/* <div className="col p-3">
             <button type="button" className="btn btn-outline-dark currentDataButton" onClick={() => window.location.pathname = "/presentdata"}>Current data</button>
             </div> */}
              
             <div className="col-1 p-3">
             <button type="button" className="btn"><div class="fat"> About </div> </button>
       
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

export default Taskbar


