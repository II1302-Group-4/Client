import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'



const CurrentValue = () => {
  const textColor = '#AAA'
return(
 
  <div className= "margin">
    <h2 class="text-center">Data readings</h2>

      <div class="border border-secondary border-2">

      <div class="row d-flex justify-content-center" >
      <p> </p>

         <div style={{
             width: '500px',
            height: '300px',
            }} class=" d-flex justify-content-center">
              
          <ReactSpeedometer
           maxValue={500}
           
           fluidWidth={true}
           maxSegmentLabels={5}
           segments={5555}
          
           needleHeightRatio={0.8}
           needleColor="steelblue"
           value={490}
           startColor="green"
           endColor="red"
           textColor={textColor}
           labelFontSize={'100px'}
           valueTextFontSize={'30px'}
           valueTextFontWeight={'500'}
           currentValueText={'VOC value: ${value}'}
           needleTransition="easeElastic" 

           
          
        />
        </div>
        
  <div style={{
             width: '500px',
            height: '300px',
            }} >

      <ReactSpeedometer
          maxValue={500}
          fluidWidth={true}
          minValue={0}
          maxSegmentLabels={5}
          segments={5555}
       
          needleHeightRatio={0.8}
          needleColor="steelblue"
          value={490}
          startColor="green"
          endColor="red"
          midColor="purple"
          textColor={textColor}
          labelFontSize={'20px'}
          valueTextFontSize={'30px'}
          valueTextFontWeight={'500'}
          currentValueText={'CO2 value: ${value}'}
          needleTransition="easeElastic" 

  />
          </div>
          <p> </p>
          </div>
          </div>
          <p> </p>
          <div class="btn-group btn-group-justified d-flex justify-content-center">
            
              <ButtonGroup aria-label="Basic example">
                 <Button variant="secondary">Now</Button>
                 <Button variant="secondary">Week</Button>
                 <Button variant="secondary">Month</Button>
              </ButtonGroup>
</div>
    </div>


)

}
export default CurrentValue




  