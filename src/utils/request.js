import axios from 'axios'
// import { Message } from 'element-ui'
import { getToken, setToken } from '@/utils/auth'
import VueJwtDecode from 'vue-jwt-decode'

// create an axios instance
const baseUrl = process.env.API
const service = axios.create({
  baseURL: baseUrl, // base api url
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = getToken()

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
      // ------------------------------------------------
      try {
        const now = new Date()
        const tokenDecode = VueJwtDecode.decode(token)
        const expDate = new Date(tokenDecode.exp * 1000)
        expDate.setMinutes(expDate.getMinutes() - 2)
        if (now > expDate) {
          axios({
            url: '/api/token',
            method: 'get',
            timeout: 60000,
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then(function(res) {
            if (res.data.token !== '' || res.data.token !== null || res.data.token !== undefined) {
              setToken(res.data.token)
            }
          }).catch(function() {
            // ...
          })
        }
      } catch (error) {
        // ...
      }
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
    const data = response.data
    switch (data.code) {
      case 0:
        return Promise.resolve(response)
      case 1001:
        // Message({
        //   message: 'Invalid parameters, please try again.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 1002:
        // Message({
        //   message: 'Empty parameters, please try again.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 2001:
        // Message({
        //   message: 'These credential does not match with our records.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 2002:
        // Message({
        //   message: 'Invalid user, please relogin.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 2003:
        // Message({
        //   message: 'User is already exist',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 3001:
        // Message({
        //   message: 'Server error, please try again.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 3002:
        // Message({
        //   message: 'Server error, please try again.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 4001:
        // Message({
        //   message: 'Server error, please try again.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      case 5001:
        // Message({
        //   message: 'Permission denied, please try again.',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(response)
      default:
        if (data.type || response.status === 200) {
          return Promise.resolve(response)
        } else {
          // Message({
          //   message: 'Server error, please try again.',
          //   type: 'error',
          //   duration: 5 * 1000
          // })
          return Promise.reject(response)
        }
    }
    // return response
  },
  error => {
    if (error.response.status === 401) {
      // delete all cookies from browser
      document.cookie.split(';').forEach(function(c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
      })
      // change url hash to 'login'
      window.location.hash = 'login'
      // force refresh the page from server
      window.location.reload(true)
    }
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
