import React from 'react'
import TaskBar from '../components/TaskBar'
import CurrentData from '../components/CurrentData'
const Homepage = () => {
    return (
        <>
            <TaskBar />
            <div className="d-flex justify-content-center">
                <CurrentData />

            </div>
        </>
    )
}

export default Homepage
