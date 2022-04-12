import React from 'react'
import { getCurrentData } from "../redux/actions/currentDataActions"
import { useDispatch, useSelector } from 'react-redux'
const CurrentData = () => {
    const dispatch = useDispatch();
    const currentData = useSelector(state => state.currentData)

    return (
        <>
            <div className="col-12 col-sm-7">
                <button type="button" className="btn btn-primary btn-lg btn-block getCurrentData" onClick={() => { dispatch(getCurrentData()) }}>Get latest reading with a server call </button>
                {currentData.loadingCurrentData ? <h2>Loading data...</h2> : <h2>{currentData.currentData}</h2>}
            </div>
        </>
    )
}

export default CurrentData;
