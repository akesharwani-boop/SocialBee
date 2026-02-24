import axios from 'axios'

const api= axios.create({// ye mera custom axios instance hai 
    baseURL: '',
    headers:{
        'Content-Type': 'application/json',// server ko bataungi mai data json format men bhejungi 
    },
    timeout:10000 // request maximumj 1 millisecond tak wait karegi 
})
export default api

//axios mera https request ke liye use ghoga 