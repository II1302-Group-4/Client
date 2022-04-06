import axios from 'axios'
const dataUrl = "http://localhost:5000/data"
const deployedUrl = "https://pollutesttt.azurewebsites.net/data"
export const getCurrentData = () => axios.get(deployedUrl)
