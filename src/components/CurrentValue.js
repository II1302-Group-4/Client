import React, { useEffect } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { getCurrentData } from "../redux/actions/currentDataActions"
import { useDispatch, useSelector } from 'react-redux'

const CurrentValue = () => {
  const textColor = '#AAA'

  const dispatch = useDispatch();
  const currentData = useSelector(state => state.currentData)

  useEffect(() => {
    dispatch(getCurrentData())
  }, [])

  return (
    <>
      {currentData.loadingCurrentData ? <h2>Loading data...</h2> :
        <div className="margin">
          <h2 class="text-center">Data readings</h2>

          <div >

            <div class="row d-flex justify-content-center" >
              <p> </p>

              <div style={{
                width: '500px',
                height: '300px',
              }} class=" d-flex justify-content-center">

                <ReactSpeedometer
                  maxValue={1000}
                  minValue={0}
                  fluidWidth={true}
                  maxSegmentLabels={5}
                  segments={3000}

                  needleHeightRatio={0.8}
                  needleColor="steelblue"
                  value={currentData?.currentData?.VOC?.value}
                  startColor="green"
                  endColor="red"
                  textColor={textColor}
                  labelFontSize={'13px'}
                  valueTextFontSize={'16px'}

                  currentValueText={`VOC value: ${currentData?.currentData?.VOC?.value} ${currentData?.currentData?.VOC?.unit}`}
                  needleTransition="easeElastic"

                />
              </div>

              <div style={{
                width: '500px',
                height: '300px',
              }} >

                <ReactSpeedometer
                  maxValue={1000}
                  minValue={0}
                  fluidWidth={true}
                  maxSegmentLabels={5}
                  segments={3000}

                  needleHeightRatio={0.8}
                  needleColor="steelblue"
                  value={currentData?.currentData?.CO2?.value}
                  startColor="green"
                  endColor="red"
                  textColor={textColor}
                  labelFontSize={'13px'}
                  valueTextFontSize={'16px'}

                  currentValueText={`CO2 value: ${currentData?.currentData?.CO2?.value} ${currentData?.currentData?.CO2?.unit}`}
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
        </div>}
    </>
  )
}
export default CurrentValue




