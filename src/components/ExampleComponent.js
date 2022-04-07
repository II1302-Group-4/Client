import React from 'react'
import { getCurrentData } from "../redux/actions/currentDataActions"
import { useDispatch, useSelector } from 'react-redux'
const ExampleComponent = () => {
    const dispatch = useDispatch();
    const currentData = useSelector(state => state.currentData)

    return (
        <>
            <h1>Pollusense</h1>
            <button onClick={() => { dispatch(getCurrentData()) }}>Get latest reading with a server call (Simulated 1s delay)</button>
            {currentData.loadingCurrentData ? <h2>Loading data...</h2> : <h2>{currentData.currentData}</h2>}
        </>
    )
}

export default ExampleComponent