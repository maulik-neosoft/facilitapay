import axios from 'axios'
import Store from '@/store/index'

// create an axios instance
const baseUrl = 'https://sandbox-api.facilitapay.com/api/v1' // ' https://api.facilitafx.com/api/v1/'
const service = axios.create({
  baseURL: baseUrl,
  timeout: 30000
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = Store.getters.token
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return Promise.reject(response)
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
