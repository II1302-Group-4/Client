import axios from 'axios'

const devUrl = "http://localhost:5000/data"
const deployedUrl = "http://pollusenseserver.azurewebsites.net/"
export const getCurrentData = () => axios.get(deployedUrl)
