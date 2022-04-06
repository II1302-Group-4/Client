import axios from 'axios'

const url = process.env.PORT ? "http://pollusenseserver.azurewebsites.net/data" : "http://localhost:5000/data"
// const dataUrl = "http://localhost:5000/data"
// const deployedUrl = "http://pollusenseserver.azurewebsites.net/"
export const getCurrentData = () => axios.get(url)
