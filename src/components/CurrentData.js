import React from 'react'
import { getCurrentData } from "../redux/actions/currentDataActions"
import { useDispatch, useSelector } from 'react-redux'
const ExampleComponent = () => {
    const dispatch = useDispatch();
    const currentData = useSelector(state => state.currentData)

    return (
        <>
            <button onClick={() => { dispatch(getCurrentData()) }}>Get latest reading with a server call</button>
            {currentData.loadingCurrentData ? <h2>Loading data...</h2> : !currentData.currentData ? <div></div> :
                <table>
                    <tbody>
                        <tr>
                            <th>PM1</th>
                            <th>PM2.5</th>
                            <th>PM10</th>
                        </tr>
                        <tr>
                            <td>{currentData?.currentData?.PM1}</td>
                            <td>{currentData?.currentData?.PM25}</td>
                            <td>{currentData?.currentData?.PM10}</td>
                        </tr>
                    </tbody>
                </table>}
        </>
    )
}

export default ExampleComponent