import React, {useState} from 'react'
import CurrentValue from '../components/CurrentValue'
import TaskBar from '../components/TaskBar'
import HourValue from '../components/HourValue'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const PresentValue = () => {
    const [timeMode, setTimeMode] = useState("Reading")
    return (
        <>
            <TaskBar />

            {timeMode === "Reading"? 
            <CurrentValue />

            :
  
            
            <HourValue />
   
}
            <div className="btn-group btn-group-justified d-flex justify-content-center">
             <ButtonGroup aria-label="Basic example">

               <Button onClick={() => setTimeMode("Reading")} variant="secondary">Now</Button>
               <Button onClick={() => setTimeMode("History")} variant="secondary">Hour</Button>

             </ButtonGroup>
             
             </div>
             
        </>
    
    )
}

export default PresentValue