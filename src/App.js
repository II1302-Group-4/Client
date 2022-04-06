import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentData } from './redux/actions/currentDataActions'

const App = () => {

  const dispatch = useDispatch();
  const currentData = useSelector(state => state.currentData)

  return (
    <>
      <h1>Pollusense</h1>
      <button onClick={() => { dispatch(getCurrentData()) }}>Get latest reading with a server call</button>
      {currentData.loadingCurrentData ? <h2>Loading data...</h2> : <h2>{currentData.currentData}</h2>}
    </>

  )
}

export default App