import React from 'react'
import { getCurrentData } from "../redux/actions/currentDataActions"
import { useDispatch, useSelector } from 'react-redux'
const ExampleComponent = () => {
    const dispatch = useDispatch();
    const currentData = useSelector(state => state.currentData)

    return (
        <>  
        <div>  <p></p></div>

            <div class="container-fluid">
            <div class="row p-3 mb-2 bg-info text-white">
            <div class="col col-sm-7"><h3>PolluSense</h3>  </div>

    <div class="col">
    </div>
    <div class="col">
    </div>


    <div class="col-auto">
    <button type="button" class="btn btn-outline-light">Log in</button>
    </div>
   

           </div>		 
           </div>
           <div>  <p></p></div>
           <div class="col-12 col-sm-7">
           <button type="button" class="btn btn-primary btn-lg btn-block"  onClick={() => { dispatch(getCurrentData()) }}>Get latest reading with a server call </button>
            {currentData.loadingCurrentData ? <h2>Loading data...</h2> : <h2>{currentData.currentData}</h2>}
            </div>
        </>
    )
}

export default ExampleComponent