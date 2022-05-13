import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { getCurrentData } from "../redux/actions/currentDataActions"
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HourValue = () => {


const labels = ['08:00','09:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00','03:00', '04:00'];
const data = {
  labels,
  datasets: [
    {
      label: 'CO2',
      data: [10,20,30,50],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(1, 138, 254, 0.5)',
    }
  ],
};

const data2 = {
  labels,
  datasets: [
    {
      label: 'VOC',
      data: [2,4,5,3],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

  return ( 
  <>

   <div className="margin">
      <h2 className="text-center">Hourly data readings</h2>
        <div className="row d-flex justify-content-center" >
          <div style={{
            width: '600px',
            height: '300px',
           }} className=" d-flex justify-content-center">
            <Line data={data}/>
           
            <Line data={data2}/>
            
           </div>
           
        </div>
        
    </div>

  
  </>
  )


  }
export default HourValue