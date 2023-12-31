import axios from 'axios'
import jwtDecode from 'jwt-decode'
import {environment} from "../env/environment";

const API_URL = environment.URL + 'api/auth'
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

const getTokenExpirationDate = encodedToken => {
    const token = jwtDecode(encodedToken)
    if (!token.exp) {
        return null
    }

    const expirationDate = new Date(0)
    expirationDate.setUTCSeconds(token.exp)

    return expirationDate
}

const isTokenExpired = token => {
    const expirationDate = getTokenExpirationDate(token)
    return expirationDate < new Date()
}

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/authenticate`, {email, password})
    console.log(response)
    localStorage.setItem('user', response.user)
    localStorage.setItem('token', response.accessToken)
    window.location.href = '/home'
}

const register = async (name, email, password) => {
    await axios.post(`${API_URL}/register`, {name, email, password})
}

const logout = () => {
    localStorage.removeItem('token')
    setAuthToken(null)
}

const getAuthToken = () => localStorage.getItem('token')

const isAuthenticated = () => {
    const token = getAuthToken()
    return !!token && !isTokenExpired(token)
}

export {
    setAuthToken, getTokenExpirationDate, isTokenExpired, login, register, logout, getAuthToken, isAuthenticated
}
