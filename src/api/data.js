import axios from 'axios'
const dataUrl = "http://localhost:5000/data"

export const getCurrentData = () => axios.get(dataUrl)
