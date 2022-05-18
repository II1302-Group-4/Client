import React, { useEffect } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { getCurrentData } from "../redux/actions/currentDataActions"
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";

const CurrentValue = () => {
  const textColor = '#000000'
  const dispatch = useDispatch();
  const currentData = useSelector(state => state.currentData)

  useEffect(() => {
    dispatch(getCurrentData())
  }, [])

  if (currentData.loadingCurrentData) {
    return (
      <div className="margin" id="loadingIndicator">
        <div className="row d-flex justify-content-center">
          <ClipLoader />
        </div>
      </div>
    )
  }

  if (currentData.currentDataError) {
    return (
      <div className="margin">
        <h2 className="text-center">{currentData.currentDataError.message}</h2>
        <div className="btn-group btn-group-justified d-flex justify-content-center">
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => dispatch(getCurrentData())} variant="secondary">Try again</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }

  if (currentData.currentData) {
    const date = new Date(currentData.currentData.time * 1000).toString().substring(0, 24)
    return (
      <>
        <div className="margin">
          <h2 className="text-center">Latest data reading: {date}
          </h2>
          <p className="margin2"> </p>
          <div className="row d-flex justify-content-center" >
            <div style={{
              width: '500px',
              height: '300px',
            }} className=" d-flex justify-content-center">
              <ReactSpeedometer
                maxValue={2000}
                fluidWidth={true}
                maxSegmentLabels={7}
                segments={3000}
                customSegmentStops={[0, 350, 450, 600, 800, 1000, 2000]}
                segmentColors={['green', 'limegreen', 'gold', 'orange', 'tomato', 'firebrick']}
                needleHeightRatio={0.8}
                needleColor="steelblue"
                value={currentData?.currentData?.CO2}
                startColor="green"
                endColor="red"
                textColor={textColor}
                labelFontSize={'13px'}
                valueTextFontSize={'20px'}
                currentValueText={`CO2: ${currentData?.currentData?.CO2} ppm`}
                needleTransition="easeElastic"
              />
            </div>

            <div style={{
              width: '500px',
              height: '300px',
            }} >
              <ReactSpeedometer
                maxValue={10000}
                minValue={0}
                fluidWidth={true}
                maxSegmentLabels={4}
                segments={3000}
                customSegmentStops={[0, 250, 2000, 10000]}
                segmentColors={['green', 'gold', 'firebrick']}
                needleHeightRatio={0.8}
                needleColor="steelblue"
                value={currentData?.currentData?.VOC}
                startColor="green"
                endColor="red"
                textColor={textColor}
                labelFontSize={'13px'}
                valueTextFontSize={'20px'}
                currentValueText={`VOC: ${currentData?.currentData?.VOC} ppb`}
                needleTransition="easeElastic"
              />
            </div>
          </div>
        </div>
      </>
    )
  }

}
export default CurrentValue




