import axios from 'axios'


const BASE_URL = 'https://mu-api.yuk0.com/'

export const request = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})