import axios from 'axios'

let url;

if (process.env.NODE_ENV === 'development') {
    url = "http://localhost:5000"
}
else {
    url = "https://pollusenseserver.azurewebsites.net"
}

export const getCurrentData = () => axios.get(`${url}/data`)

export const getHistoricData = () => axios.get(`${url}/history`)