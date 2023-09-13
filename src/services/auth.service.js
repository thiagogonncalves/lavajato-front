// import decode from 'jwt-decode'
// import router from '@/router'
// import axios from 'axios'
// import request from '@/services/config'

// export const http = axios.create({
//     baseURL: 'http://localhost:8000/'
// })

// export const handleLogin = data => {
//   return http.post('token/', data)
// }

// export const setToken = async (response) => {
//   try {
//     localStorage.setItem('lavajato@accessToken', response.data.access)
//     localStorage.setItem('lavajato@refreshToken', response.data.refresh)
//     const userInfoResponse = await request.get('/api/user-info/')
//     const userInfo = userInfoResponse.data
//     localStorage.setItem('lavajato@user', JSON.stringify(userInfo))
//     router.push('/')
//   } catch (error) {
//     console.error('Error setting token:', error)
//   }
// }

// export const renewUser = async () => {
//   try {
//     const userInfoResponse = await request.get('/api/user-info/')
//     const userInfo = userInfoResponse.data
//     localStorage.setItem('lavajato@user', JSON.stringify(userInfo))
//     window.location.reload()
//   } catch (error) {
//     console.error('Error setting user:', error)
//   }
// }

// export const isValidToken = token => {
//   if (!token) {
//     return false
//   }

//   const decoded = decode(token)
//   const currentTime = Date.now() / 1000
//   return decoded.exp > currentTime
// }

// export const refreshToken = async () => {
//   http
//     .post('token/refresh/', {refresh: localStorage.getItem('lavajato@refreshToken')})
//     .then(res => {
//       localStorage.setItem('lavajato@accessToken', res.data.access)
//       localStorage.setItem('lavajato@user', JSON.stringify(decode(res.data.access)))
//     })
//     .catch(() => {
//       clearToken()
//     })
// }

// export const clearToken = () => {
//   localStorage.removeItem('lavajato@accessToken')
//   localStorage.removeItem('lavajato@refreshToken')
//   localStorage.removeItem('lavajato@user')
// }