import axios from "axios"
import {environment} from "../env/environment.js"

const API_URL = environment.URL

const UserService  = {

    find_disponible_pharmacy: async (zoneId, date) => {
        try {
            const response = await axios.get(`${API_URL}pharmacies/zone/${zoneId}/${date}`)
            return response.data
        } catch (error) {
            // Handle error
            console.error(error)
            throw error
        }
    },

    findPharmacieByNomVilleAndZone: async (zoneName, villeName) => {
        try {
            const response = await axios.get(`${API_URL}ville/${villeName}/zones/zone/${zoneName}/pharmacies`)
            return response.data
        } catch (error) {
            // Handle error
            console.error(error)
            throw error
        }
    },

    save: async (data) => {
        try {
            const response = await axios.post(`${API_URL}`, data)
            console.info(response)
            return response.data
        } catch (error) {
            // Handle error
            console.error('Error saving data:', error)
            throw error
        }
    },


    remove: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}id/ ${id}`)
            return response.data
        } catch (error) {
            // Handle error
            console.error('Error removing data:', error)
            throw error
        }
    },

    getAll: async () => {
        try {
            const response = await axios.get(`${API_URL}`)
            return response.data
        } catch (error) {
            // Handle error
            console.error('Error getting all data:', error)
            throw error
        }
    },

    getById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}id/${id}`)
            return response.data
        } catch (error) {
            // Handle error
            console.error('Error getting all data:', error)
            throw error
        }
    }
}

export default UserService
