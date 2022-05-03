import axios from 'axios'

let url;

if (process.env.NODE_ENV === 'development') {
    url = "http://localhost:5000/data"
}
else {
    url = "https://pollusenseserver.azurewebsites.net/data"
}

export const getCurrentData = () => axios.get(url)