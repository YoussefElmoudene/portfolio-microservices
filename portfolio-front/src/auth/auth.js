import axios from 'axios'
import jwtDecode from 'jwt-decode'
import {environment} from "../env/environment";
import type {User} from "../models/user";

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
    localStorage.setItem('user', JSON.stringify(response?.data))
    window.location.href = '/about-me'
}

const register = async (user) => {
    const response = await axios.post(`${API_URL}/register`, user)
    console.log(response)
    localStorage.setItem('user', JSON.stringify(response?.data))
    window.location.href = '/about-me'
}

const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setAuthToken(null)
    window.location.href = '/login'
}

const getAuthToken = () => localStorage.getItem('token')
const getUser: User = () => JSON.parse(localStorage.getItem('user'))

const isAuthenticated = () => {
    const token = getAuthToken()
    return !!token && !isTokenExpired(token)
}

export {
    setAuthToken,
    getUser,
    getTokenExpirationDate,
    isTokenExpired,
    login,
    register,
    logout,
    getAuthToken,
    isAuthenticated
}
