import axios from 'axios'

let url;

if (process.env.NODE_ENV === 'development') {
    url = "http://localhost:5000/data"
}
else {
    url = "http://pollusenseserver.azurewebsites.net/data"
}

export const getCurrentData = () => axios.get(url)
